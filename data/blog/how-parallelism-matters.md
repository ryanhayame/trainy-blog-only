---
title: 'How Data Parallelism & Hardware Affect Speed'
date: '2023-09-12'
draft: false
summary: How fast you can train your model depends on your hardware and your parallelism strategy. Knowing your hardware will guide you on which strategy you should use.
tags: [Training, DDP, FSDP, Data Parallelism]
canonicalUrl: data_parallel
authors: ['default']
---

**tl;dr Get 50% speedup by choosing the right parallelism strategy for your hardware**

The compute requirements to train large models such as LLMs and text2image models requires both an evergrowing amount of training data and compute. For example, [training a GPT-3 30B model using 256 A100-40GB GPUs takes ~36 days](https://www.mosaicml.com/blog/gpt-3-quality-for-500k). Most of the recent advances in parallelism have focused on model sharding in order scale models way beyond what can fit onto a single GPU. However, parallelism strategy plays a large role in how fast training can be executed, easily resulting in upwards of 50% improvement in training speed. We illustrate this with a simple language modeling experiment.

## Causual Language Modeling with DDP & FSDP

We tested both [Distributed Data Parallel (DDP)](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html) and [Fully Sharded Data Parallel (FSDP)](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html). While DDP has a full copy of the model on each GPU, FSDP shards the model across different GPUs. We trained a GPT-2 causal LM on the wikitext dataset using [this script from HuggingFace](https://huggingface.co/blog/assets/62_pytorch_fsdp/run_clm_no_trainer.py) on a DGX 8xA100-80GB networked via NVLink (600GB/s). For all the model and batch sizes we consider, the entire model can fit and be trained on a single GPU. The data parallelism strategy can be selected with:

```
accelerate config
```

To run train a GPT-Large (762M) model, we ran the following

```
export BS=11

time accelerate launch run_clm_no_trainer.py \
--model_name_or_path gpt2-large \
--dataset_name wikitext \
--dataset_config_name wikitext-2-raw-v1 \
--per_device_train_batch_size $BS
--per_device_eval_batch_size $BS
--num_train_epochs 1
--block_size 12
```

We did this for a fixed batch size of 11 with the train times summarized below.

| Configuration           | Training Time |
| ----------------------- | ------------- |
| DDP                     | 5m57s         |
| **FSDP, SHARD_GRAD_OP** | **4m27s**     |

**We see that FSDP gives a 34% speedup relative to DDP**. The results are even more apparent when we tested this for a larger model (GPT-XL 1.5B, batch size = 5)

| Configuration           | Training Time |
| ----------------------- | ------------- |
| DDP                     | 21m32s        |
| **FSDP, SHARD_GRAD_OP** | **14m37s**    |

For a larger model, **the speedup was even greater, giving a relative speedup of 47%**.

## Why Can FSDP Speedup Training

You might read the above results and conclude that you should always use FSDP, but there are many instances where this is not the case. [A similar experiment by HuggingFace](https://huggingface.co/blog/pytorch-fsdp) concluded that DDP was faster. [A PyTorch blog](https://pytorch.org/blog/efficient-large-scale-training-with-pytorch/) contained results showing that DDP was the most efficient for all models that could fit on a single GPU. So what's the difference between our experiments and theirs? The short answer is hardware. For the HuggingFace experiment, the experiment was done on 2x Titan RTX GPUs and the PyTorch one on 4 nodes of 8xA100-40GB VMs on AWS.

DDP and FSDP compute the same model on the same data but require different amounts of GPU communication. Since DDP contains the entire model on the GPU, the only communication required during training is synchronizing the gradients of the entire model for each optimizer step. In contrast, FSDP requests all model shards to be shared during forward and backward computation, albeit only requires synchronizing gradients for the local shard on the GPU. **Relative to DDP, FSDP has higher communication volume in exchange for both a smaller memory footprint and reduced shard synchronization cost**.

For the experiments done by HuggingFace and PyTorch, communication between GPUs would have incurred significant cost. TitanRTX GPUs ran on generation 1 NVLink (~150GB/s) while the bandwidth limit for GPU to GPU communication on AWS for A100 instances is (400Gb/s). This imposes higher communication cost compared to our hardware, generation 3 NVLink (600GB/s) which make the extra communication of FSDP cheap. **When bandwidth is high and enables fast communication, because the size of the model shards are divided amongst the GPUs, FSDP reduces the work per GPU as the number of GPUs increases, yielding nearly linear scaling.** This finding has similarly been reported for [training Stable Diffusion](https://www.mosaicml.com/blog/diffusion). Because of this, it typically pays to use higher cost instances in cloud from **both** improved GPU-GPU interconnectivity (NVLink vs PCIe, Infiniband vs RoCE) and faster computation of newer GPUs.
