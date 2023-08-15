---
title: 'Drop-In replacement for GPT with Llama 2 for OpenAI API'
date: '2023-08-14'
draft: false
summary: Use your favorite LLM application frameworks like Llama Index or Langchain with your self-served open source model deployment.
tags: [LLM, Serving, Introduction, Llama Index, Langchain]
canonicalUrl: chat_complete
authors: ['default']
---

In our [last blog post](/blog/llmatc), we showed how to deploy a [FastChat OpenAI API endpoint](https://github.com/lm-sys/FastChat/blob/main/docs/openai_api.md). Here, we'll show how to request from this endpoint in Python through the OpenAI, LlamaIndex, and Langchain python APIs.

## Setup

First, create the serving endpoint. This can be done with [one command](https://llm-atc.readthedocs.io/en/latest/quickstart/serving.html) using `llm-atc serve`. Afterwards, you'll need to get the public IP address assigned to the endpoint for sending requests.

```bash
# Serve Llama 2 7b can be served on a V100 on aws
$ llm-atc serve --name meta-llama/Llama-2-7b-chat-hf --accelerator V100:1 -c servecluster --cloud aws --region us-east-2 --envs "HF_TOKEN=<HuggingFace_token>"

# Get the ip address of the created endpoint
$ grep -A1 "Host servecluster" ~/.ssh/config | grep "HostName" | awk '{print $2}'
```

## [OpenAI Python API](https://platform.openai.com/docs/api-reference/introduction?lang=python)

```python
import openai

# to get proper authentication, make sure to use a valid key that's listed in
# the --api-keys flag. if no flag value is provided, the `api_key` will be ignored.
openai.api_key = "EMPTY"
openai.api_base = "http://<YOUR ENDPOINT IP>:8000/v1"

model = "Llama-2-7b-chat-hf"
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

## [Llama Index](https://gpt-index.readthedocs.io/en/stable/core_modules/model_modules/llms/usage_standalone.html)

```python
import openai
from llama_index.llms import ChatMessage, OpenAI
from llama_index.llms.base import LLMMetadata

FASTCHAT_IP = "<YOUR ENDPOINT IP>"
openai.api_base = f"http://{FASTCHAT_IP}:8000/v1"
openai.api_key = "EMPTY"


class FastChatLlama2(OpenAI):
    @property
    def metadata(self) -> LLMMetadata:
        return LLMMetadata(
            context_window=4000,
            num_output=self.max_tokens or -1,
            is_chat_model=self._is_chat_model,
            is_function_calling_model=False,
            model_name=self.model,
        )


messages = [
    ChatMessage(role="system", content="You are a pirate with a colorful personality"),
    ChatMessage(role="user", content="What is your name"),
]

resp = FastChatLlama2(model="Llama-2-7b-chat-hf", max_tokens=4000).chat(messages)
print(resp)
```

## [Langchain](https://python.langchain.com/docs/modules/model_io/models/chat/)

```python
import os

FASTCHAT_IP = "<YOUR ENDPOINT IP>"

os.environ["OPENAI_API_BASE"] = f"http://{FASTCHAT_IP}:8000/v1"
os.environ["OPENAI_API_KEY"] = "EMPTY"

from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

chat = ChatOpenAI(model="Llama-2-7b-chat-hf")

messages = [
    SystemMessage(content="You are a pirate with a colorful personality"),
    HumanMessage(content="What is your name"),
]
print(chat(messages))

```
