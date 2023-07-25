---
title: 'Feature Update: Trainy Monitoring Daemon'
date: '2023-07-25'
draft: false
summary: Generate traces of your entire cluster during distributed training, with little to no impact on training speed.
tags: [Introduction, Setup, Features]
canonicalUrl: feature-update-1
authors: ['default']
---

We are excited to release our latest feature: [the Trainy Monitoring Daemon](https://github.com/Trainy-ai/trainy). This powerful tool allows you to generate traces of your entire cluster during distributed training, with little to no impact on training speed.

Given these traces, you can use our profiler to find solutions to some of the trickiest problems ML Engineers encounter such as locating hardware slowdowns/failures and choosing the correct degree of parallelism given your model size and hardware requirements. [Learn more](https://trainy.ai/blog/introducing-trainy).

There are currently no other drop-in solutions for PyTorch that allow you to profile your model’s forward and backward passes on-demand, but we make it possible to peek into your model training with kernel-level timings and debug issues in **realtime**.

Today, we’ll cover installation and usage of the daemon. If you’d like to follow along, you can use our example [here](https://github.com/Trainy-ai/trainy/tree/main/examples/resnet_mnist).

## Installation

Our project is available on pypi as shown below, or you can build from source with the code on [Github](https://github.com/Trainy-ai/trainy).

```bash
pip install trainy
```

## Usage

Once Trainy is installed, integrating it into your training code is a straightforward process. Just add two lines of code before your training begins:

```python
import trainy
trainy.init()
```

Next, if you haven't already, set up ray head and worker nodes. We’ve used Skypilot to automate this step, so if you’re using our example, you can skip this step.

```bash
# on the head node
ray start --head --port 6380
# on the worker nodes
ray start --address ${HEAD_IP}
```

With Ray configured and your model training in progress, capturing traces on all nodes is as simple as running the following command:

```bash
trainy trace --logdir ~/my-traces
```

This command saves traces for each process locally into the specified directory, ~/my-traces. For better organization and analysis, we recommend using a shared file system like NFS or an S3-backed store, ensuring all traces are stored in the same location. An example of how to set this up and scale effectively on AWS can be found in the [examples/resnet_mnist directory](https://github.com/Trainy-ai/trainy/tree/main/examples/resnet_mnist).

## Conclusion

Compared to existing tooling, we’ve made it effortless to gather traces while your training is running, so you can debug performance issues as they happen.

From here, you can load up the trace files in our tensorboard plugin and determine if your distributed training is optimized well for your specific hardware, as well as if any specific nodes on your cluster are slowing down the overall training.

```bash
tensorboard --logdir ~/my-traces
```

For more information and to explore the Trainy monitoring daemon, please visit our GitHub repository [here](https://github.com/Trainy-ai/trainy/), and drop us a star! Feel free to reach out to our team with any questions or feedback.
