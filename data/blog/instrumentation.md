---
title: 'Zero Instrumentation GPU Metrics with DCGM on Trainy: Konduktor'
date: '2024-06-15'
draft: false
summary: Monitor your GPU Clusters with Metrics
tags: [Training, Clusters, GPUs]
canonicalUrl: metrics
authors: ['default']
---

**tl;dr** Monitor your GPU cluster using utilization, power, SM efficiency metrics with DCGM without having to change your application code. Trainy: [Konduktor](https://konduktor.readthedocs.io/en/latest/) is the fastest way to get started with this and runs on Kubernetes!

# The Problem: Tracking GPU cluster usage is hard

When minimizing spend on GPU compute, a question that always comes up is where is the compute being used on. When you are small team with only a few nodes of compute. It's fine to just use `nvidia-smi` and call it day, but over multiple teams and projects, tracking utilization requires additional monitoring for administrators that can show historical usage over time. Here, we show what metrics to track, what they mean, and how you can get monitoring them on a GPU Kubernetes cluster by using our platform [Konduktor](https://konduktor.readthedocs.io/en/latest/).

While GPU stats such as power and utilization can show if your GPUs have something scheduled on them, finer grained metrics such as [streaming multiprocessor (SM) activity](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/feature-overview.html) tells you if the GPU is being efficiently used. SM activity (SM efficiency in the [PyTorch Profiler](https://pytorch.org/blog/pytorch-profiler-1.9-released/)) expresses the fraction of SMs that are active in an interval at a given time. An A100 GPU for example is composed of 128 SMs. To illustrate the shortcomings of GPU utilization, if we have a kernel that continuously runs for 10 seconds but only uses one 1 SM, on an A100, this would register 100% utilization, but the SM efficiency would be 1 / 128 = 0.7%. For a real example, we show an example from using [PyTorch Profiler](https://pytorch.org/tutorials/recipes/recipes/profiler_recipe.html) of a softmax kernel that registered 100% utilization but only ~20% SM activity.

![img](/static/images/1/profiler_tool.png 'Softmax_Profiled')

# GPU Metrics with DCGM and Konduktor

NVIDIA allows for the export of gpu health metrics via the [Data Center GPU Manager (DCGM)](https://developer.nvidia.com/dcgm). DCGM exports metrics such as GPU utilization, power, and temperature and can be deployed as a container which makes it perfect for deploying onto Kubernetes clusters as a cluster-level monitoring solution. One benefit of using DCGM to monitor your cluster applications is that it doesn't require any additional code instrumentation from cluster users. We deploy this as part of our Kubernetes-based platform [Konduktor](https://konduktor.readthedocs.io/en/latest/) which gives you the necessary Grafana dashboards to track utilization in your cluster.

Instead of having to profile code directly, we can see the difference between the utilization and SM efficiency reported instead by looking at a DCGM instrumented cluster dashboard which setup via Konduktor. Consider the following program which repeatedly performs a matrix multiply-subtract operation in PyTorch which we launched on 4 GPUs in our Kubernetes GPU cluster.

```python
import torch

m = 2048
x = torch.randn(m, m).cuda()
while True:
    x = (1 - x) @ x
```

We can look at the utilization and SM efficiency by checking the summary dashboard. We provide an example Grafana dashboard for this a screen of which is shown below.

![img](/static/images/1/grafana.png 'Grafana')

Here we see that the GPUs running the job are registering 100% utilization but the SM efficiency is < 1%, which makes sense since the size of the matrix operations are very small.

# Conclusion

Cluster admins and ML engineers need a way to track historical cluster utilization in addition to understanding how efficient their code is running on GPUs live. Having cluster monitoring tools like DCGM on Konduktor make this easy and helps manage the complexity of performance profiling by having observability baked into the infrastructure layer so ML engineers only need to dig deeper into their code if they see that the cluster metrics show unsatisfactory perofrmance.

Is your team or organization struggling with distributed training? I’d love to chat and see if Trainy can help! Send me a message on Linkedin or reach out at founders@trainy.ai
