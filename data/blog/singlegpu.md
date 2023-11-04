---
title: 'Fundamentals of Efficient Training on a Single GPU'
date: '2023-11-04'
draft: false
summary: Here we show current out-of-the-box techniques for training on a single GPU.
tags: [Training]
canonicalUrl: singlegpu
authors: ['default']
---

It's no secret that training trending generative AI models costs over a hundred thousand dollars. Training from [scratch a GPT quality models costs $450k](https://www.mosaicml.com/blog/gpt-3-quality-for-500k). Fortunately, most users we talk to shouldn't have to train from scratch, but rather fine-tune starting from open source models. Even so, fine-tuning in many cases will require you to use high end GPU instances (V100s, A100s, H100s) so efficient methods of training easily translate to tens of thousands of dollars of savings. Before you start training on multiple GPUs make sure you use these easy techniques for accelerating your training on a single GPU.

# Mixed Precision (bf16, fp16, tf32) [Speedup 2.75x]

During training, numerically stable mathematical operations can use lower precision data types such as `fp16` over `fp32`. This will speed up performance due to both the reduced size of the data types involved and the fact that NVIDIA tensor cores are especially optimized to handle arithmetic on 16-bit data types. In addition, the Ampere architecture (A100) introduced new data types, `tf32` and `bf16`, which the Ampere architecture is specifically optimized for. We ran a causal modeling task using GPT-2 and found that choosing the precision speeds up training by `2.75x`.

This is why it's more cost beneficial to pay the extra amount on cloud instances for GPUs. Not only does your training finish sooner, it's simply cheaper. For example on AWS, a high end `8xV100` instance costs `$31.218/hour` while a high end `8xA100` instance costs `$40.96/hour`, only a `1.31x` cost premium compared to the `2.75x` speedup.

| Variation       | Train samples per second | Diff % | Train loss |
| --------------- | ------------------------ | ------ | ---------- |
| --tf32 0        | 11.09                    | 0      | 2.98       |
| --tf32 1        | 27.71                    | 150    | 2.98       |
| --fp16 --tf32 0 | 30.27                    | 173    | 2.99       |
| --fp16 --tf32 1 | 30.27                    | 173    | 2.99       |
| --bf16 --tf32 0 | 30.32                    | 173    | 2.99       |
| --bf16 --tf32 1 | 30.54                    | 175    | 2.99       |

# Batch Size

The most straightforward method to increase throughput on your GPU by tuning the batch size. Usually, you want to increase the batch size to the limit of what will fit within GPU memory. While in the days of smaller models such as vision classifiers, [an excessive batch size could actually degrade the final performance of the model](https://proceedings.neurips.cc/paper/2019/file/dc6a70712a252123c40d2adba6a11d84-Paper.pdf), nowadays, generative models performance typically require larger batch sizes. For instance, [the text2image model Imagen](https://arxiv.org/pdf/2205.11487.pdf) required a batch size of 2048. By using a larger batch size, fewer host to GPU transfers are required since the GPU is kept busier each batch. [To take advantage of tensor cores on NVIDIA GPUS](https://docs.nvidia.com/deeplearning/performance/dl-performance-matrix-multiplication/index.html#requirements-tc), it's also recommended that you keep the batch size a multiple of 8x when possible (or a multiple of 64x for fp16 and A100s)

| Variation                       | Train samples per second | Diff % | Train loss |
| ------------------------------- | ------------------------ | ------ | ---------- |
| --per_device_train_batch_size 1 | 10.01                    | 0      | 2.97       |
| --per_device_train_batch_size 2 | 18.33                    | 83     | 2.96       |
| --per_device_train_batch_size 4 | 25.89                    | 159    | 2.97       |
| --per_device_train_batch_size 8 | 30.55                    | 205    | 2.99       |

# Dataloading

As with setting the batch size, key to high throughput is ensuring the GPU is kept busy by enabling fast transfer from the host to GPU device and always having batches ready to be loaded the moment the GPU is free. This is tunable with three arguments in your dataloader.

- If you are using vanilla PyTorch, set `DataLoader(pin_memory=True, ...)` to ensure data is placed in pinned memory. This accelerates loading onto the GPU by preventing page outs during the dataloading process. Trainers from frameworks like HuggingFace will set this true by default.
- Tune the number of dataloader workers. `DataLoader(num_workers=4, ...)` uses multiprocessing to create workers for fetching data. If your GPU util is low, chances are high that the GPU is waiting for batches to be returned by the host. Try increasing your number of workers to increase your GPU util.
- Prefetch more data. `DataLoader(prefetch_factor=2, ...)` to prefetch batches while the GPU is busy. This is useful fetching a batch is slow (i.e. loading a large file, streaming data over a slow network)

# Optimizer

The choice of optimizer affects both the speed and quality of the final model. Just like with mixed precision, we can choose an optimizer with mixed precision that can speedup our training at no performance cost. This year, there's even new optimizers such as [Sophia](https://arxiv.org/pdf/2305.14342.pdf) and [Lion](https://arxiv.org/pdf/2302.06675.pdf) that claim up to 2x speedup over the most commonly used optimizer Adam.

## References

- [Methods and tools for efficient training on a single GPU](https://huggingface.co/docs/transformers/perf_train_gpu_one#optimizer-choice)
- [Trainer Benchmarks on A100](https://github.com/huggingface/transformers/issues/15026#issuecomment-1005220263)
