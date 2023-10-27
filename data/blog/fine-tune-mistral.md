---
title: 'Finetuning Mistral 7B'
date: '2023-10-26'
draft: false
summary: How to fine tune and serve your own Mistral 7B model.
tags: [Finetuning, Mistral]
canonicalUrl: mistral
authors: ['default']
---

[Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/) is a newly released LLM that outperforms previous state of the art LLMs of larger size (e.g. Llama 2 13B) on many benchmarks. Here we show you how you can create your own finetune of this model on your own chat data and serve it using LLM-ATC.

## Finetuning

Finetuning starting from the pretrained Mistral7B model is as simple as defining `MODEL_BASE='mistralai/Mistral-7B-v0.1'`. We can use a chat finetuning dataset so we can use
`--model_type vicuna`

```bash
llm-atc train --model_type vicuna --finetune_data \
./my_chat_data.json --name mymistral \
--checkpoint_bucket my-trainy-bucket --checkpoint_store S3 \
-c mycluster --cloud gcp --accelerator A100:8 \
--envs "MODEL_BASE='mistralai/Mistral-7B-v0.1' HF_TOKEN=<hugging_face_token>"
```

This command in particular will save the finetuned model checkpoints into `s3://my-trainy-bucket/mymistral/`.

## Serving

Serving a Mistral 7B model is the same as it is for Llama 2 on LLM-ATC. All you have to do is specify the location of the model checkpoint. Following the finetuning example above, we have for serving:

```bash
llm-atc serve --name llm-atc \
--source s3://my-trainy-bucket/mymistral \
--accelerator A100:1 -c servecluster --cloud gcp --region asia-southeast1
```

To query the endpoint, we can use

```bash
# get the ip of the host machine
ip=$(sky status --ip servecluster)

# check that the model is loaded
curl http://$(sky status --ip servecluster):8000/v1/models
```

We can also use the OpenAI API to do a chat completion

```python
import openai

# to get proper authentication, make sure to use a valid key that's listed in
# the --api-keys flag. if no flag value is provided, the `api_key` will be ignored.
openai.api_key = "EMPTY"
openai.api_base = "http://<YOUR ENDPOINT IP>:8000/v1"

model = "llm-atc"
prompt = "Once upon a time"

# create a completion
completion = openai.Completion.create(model=model, prompt=prompt, max_tokens=64)
# print the completion
print(prompt + completion.choices[0].text)

# create a chat completion
completion = openai.ChatCompletion.create(
    model=model, messages=[{"role": "user", "content": "Hello! Who are you?"}]
)
# print the completion
print(completion.choices[0].message.content)
```

- [LLM ATC documentation](https://llm-atc.readthedocs.io/en/latest/index.html)
- [LLM ATC Github](https://github.com/Trainy-ai/llm-atc)
