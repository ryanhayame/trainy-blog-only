---
title: 'Automatic GPU Node Health and Pod scheduling'
date: '2024-07-10'
draft: false
summary: Automatically isolate faulty nodes and schedule only on healthy ones
tags: [Cluster, Cluster-Management, GPUs, Logging, Metrics]
canonicalUrl: controller
authors: ['default']
---

Large scale training runs are frequently [plagued by random hardware failures](https://github.com/facebookresearch/metaseq/blob/main/projects/OPT/chronicles/OPT175B_Logbook.pdf). A [few problematic nodes](https://imbue.com/research/70b-infrastructure/) will appear and persist within a cluster until the nodes are either rebooted, power cycled, or in the extreme requires smart hands intervention from things like excess power draw. While you might have a cluster of 100 nodes, training on the entire cluster with good reliability is out of the question. One strategy is to only train on most of the cluster while keeping a set of holdout nodes that can be swapped in should a node. Kubernetes provides a mechanism for preventing more work from being placed onto a node via [taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/). Here we show how to automatically taint faulty nodes by using the Konduktor controller.

# Create the Logging Stack

We deploy a [logging backend and node log exporters](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) in order to capture the output of `dmesg` logs and pod logs and make it easy to query them.

```bash
$ helm install --values loki.values loki --namespace=loki grafana/loki --create-namespace
$ helm install --values otel.values otel-collector --namespace=otel-collector open-telemetry/opentelemetry-collector --create-namespace
$ kubectl apply -f https://raw.githubusercontent.com/Trainy-ai/konduktor/main/konduktor/manifests/dmesg_daemonset.yaml
```

# Deploy the Controller

The controller:

- queries logs against a set of matching error messages indicating a GPU error
- If an error is detected, taint the node with `trainy.konduktor.ai/faulty=true:NoSchedule`

The controller can be deployed within the cluster with:

```bash
# create the controller deployment
$ kubectl apply -f https://raw.githubusercontent.com/Trainy-ai/konduktor/main/konduktor/manifests/controller_deployment.yaml

# follow the controller logs
$ kubectl logs -f deployment/konduktor-controller-deployment -n konduktor
```

# Fault Detection

To test that the controller is running, we can generate a `dmesg` log that mocks an [Xid error](https://docs.nvidia.com/deploy/xid-errors/index.html#what-is-an-sxid-message), one of the common error codes for NVIDIA cards. From within a privileged container, you can run:

```bash
$ echo "NVRM: Xid (0000:03:00): 14, Channel 00000001" > /dev/kmsg
```

The controller logs should then display something like

```console
[I 07-09 05:37:45 parse.py:128] node `gke-a3-cluster-gpu-pool-2d164072-zz64` has dmesg error: [1235733.431527] NVRM: Xid (0000:03:00): 14, Channel 00000001
[W 07-09 05:37:45 kube_client.py:27] incluster config failed to load, attempting to use kubeconfig.
[I 07-09 05:37:45 kube_client.py:31] KUBECONFIG loaded
[I 07-09 05:37:45 node.py:98] Node gke-a3-cluster-gpu-pool-2d164072-zz64 tainted.
```

You can check that this node is tainted with:

```bash
$ kubectl describe pod gke-a3-cluster-gpu-pool-2d164072-zz64 | grep trainy
trainy.konduktor.ai/faulty=true:NoSchedule
```

Now this node is tainted, no new pods can possibly use this node. For ML Engineers using the cluster,
this means they can automatically resubmit their job and guarantees the job only gets placed on healthy nodes.

# Conclusion

We showed how to do error detection and node tainting based on `dmesg` logs but in reality there are many more logs to be analyzed that can be reported both from pods as well as hardware counters and metrics. It's also critical to be able automatically remediate node faults that are taken out of the healthy pool and QAd in order to form a closed control loop and be able to place nodes back into the healthy pool. If you are interested in managing and running on GPU compute at scale, try out our controller or reach out to us at founders@trainy.ai

- [Node Controller Docs](https://konduktor.readthedocs.io/en/latest/admin/controller.html)
