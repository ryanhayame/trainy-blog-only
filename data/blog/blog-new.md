---
title: Identify Bottlenecks, Boost Training
date: '2023-07-17'
draft: false
summary: Trainy is your ultimate training optimization companion.
tags: [Introduction, Setup, FAQ]
canonicalUrl: first
authors: ['default']
---

Have you ever wondered whether you’re training your model as fast as possible?

According to Lukas Biewald, co-founder of Weights and Biases, a staggering number of their users—almost a third—are experiencing less than 15% GPU utilization. In the face of ongoing GPU availability issues and skyrocketing costs, it is crucial to address these bottlenecks head-on. In this blog post, we will dive into some common problems that hinder training speed and how Trainy’s dashboards can help shed light into what’s really going wrong.

Of course, everything presented here is generalized, and we'd love to discuss more complex issues you're experiencing. Feel free contact me at roanak@trainy.ai.

But first, let's get set up with Trainy.

## Quickstart

Currently our dashboards are accessible by installing our tensorboard plugin:

```bash
pip install nodify-plugin
```

You can then start tensorboard on a directory of traces. Download some example trace files [here](https://drive.google.com/file/d/18xXgu49bwFeKi2Tqz8xo7jRoSfUuFcGb/view).

```bash
tensorboard --logdir logs/
```

Currently, traces files have to be extracted using [Pytorch Profiler](https://pytorch.org/tutorials/recipes/recipes/profiler_recipe.html). This makes profiler usage tough, since engineers rarely want to take the effort to generate these trace files themselves.

Luckily, we've developed a solution to profile your model's forward and backward passes **during training**. We will be releasing our solution for gathering trace files online later this week, so be sure to stay updated.

## DataLoaders

One of the key factors that can significantly slow down your training is a slow dataloader. How can you identify this issue?

Look out for high GPU idle times as well as poor GPU and network utilization.

![img](/static/images/1/bad-dataloader.png 'Bad DataLoader')

You can see the GPUs are just idly waiting, and their time spent idle is not parallelized well with the time spent on internode communication. This is generally a symptom of a slow dataloader, but could also be related to what level of model/pipeline parallelism you are using.

To tackle this, consider implementing the following solutions:

- Increase the number of workers for your dataloader.
- Try putting tensors in pinned memory.
- Explore more complex solutions, involving how the dataset is stored (or streamed) or reusing your dataloader workers by setting persistent workers to true.

## Network Overhead

Another bottleneck that can impede your training process is excessive network overhead.

Given the extreme sizes of modern day LLMs or diffusion models, all trainers need to use some form of Data, Model, or Pipeline parallelism. However, these methods make the tradeoff of allowing you to train a model that would otherwise not fit in your GPU's VRAM by adding significantly more network overhead. Finding the optimal setup given your hardware network constraints can be difficult but rewarding. If you're dealing with this, reach out and we can help you get the most out of your cluster.

When experiencing excessive network overhead, there are two potential scenarios to consider:

1. A single node experiencing significantly worse connectivity: How can you identify this issue? Keep an eye out for anomalies in all reduce call timings. It would look something like the image below. To address this, consider isolating the node with your hardware provider, as it may have a faulty connection.

![img](/static/images/1/network-anomaly.png 'Anomaly in Network Timings')

2. Overall pressure on internode communications: How can you tell if this is affecting your training? Look for indicators such as poor GPU utilization, longer idle times, and increased network times in general. You would see the Temporal Breakdown heavily weighted towards communication time, like the image below. To mitigate this, try the following solutions:
   - Employ a different sharding method to improve parallelism.
   - Optimize the workload distribution to reduce internode communication.

![img](/static/images/1/bad-network.png 'Overall Slow Network Timings')

## Scale Up

The dream of any ML practitioner on a distributed cluster is linear scaling. If you use double the compute, training should take half the time. This is rarely the reality, but we can move closer to that ideal by ensuring we scale up after achieving adequate GPU and Network utilization. A normal Temporal Breakdown should look like this:

![img](/static/images/1/normal.png 'Healthy')

Especially if your Temporal Breakdown shows that your trainer spends a significant portion of time on Communication, you should aim to maximize your Computation-Communication Overlap. More overlap means your trainer is parallelized well, and your GPUs will spend less time idle throughout your training process. A strong Computation-Communication Overlap graph will have consistently high % overlap across all nodes, looking something like the image below:

![img](/static/images/1/comp-comm.png 'Computation-Communication Overlap')

## Conclusion

Efficient training is essential for any machine learning project, especially considering the challenges posed by limited GPU availability and rising costs. By identifying and addressing bottlenecks, such as slow dataloaders and excessive network overhead, you can significantly boost the efficiency of your training process. Remember to continuously monitor your training and experiment with different optimization strategies to find the most effective solutions for your specific use case.

Trainy is here to assist you on this journey towards enhanced training performance. If you'd like to discuss potential solutions for your cluster, the struggles of distributed training, or anything ML-related, be sure to reach out. We'd love to hear from you, and you can join us on [Discord](https://discord.gg/xfqeNjEA) or contact me at roanak@trainy.ai. Happy training!
