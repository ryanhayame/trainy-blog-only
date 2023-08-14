---
title: 'LLM Air Traffic Controller: Easy Finetuning and Serving of Open Source LLMs'
date: '2023-08-02'
draft: false
summary: LLM-ATC handles orchestration for finetuning and serving LLMs. Just bring your data and let LLM-ATC work under the hood on the cloud provider of your choice.
tags: [LLM, Finetune, Introduction]
canonicalUrl: llmatc
authors: ['default']
---

Recent scarcity of high end GPUs in cloud require ML engineers to open accounts on multiple clouds in order to maximize access. However, there's a large barrier for learning different toolchains across clouds given you just want the same resources. In addition, training artifacts would need to be synchronized across clouds in order to be serveable in regions closest to your users.

We are releasing LLM Air Traffic Controller (LLM ATC), a command line tool for finetuning and serving open source LLMs on any cloud. **LLM-ATC automatically finds available GPUs across multiple providers** for training and serving and **saves models so that they can be served on any provider**.

## Installation

Our project is now on [PyPi](https://pypi.org/project/llm-atc/). We recommend creating an environment by using the following.

```
conda create -n "sky" python=3.10
conda activate sky

# If you are on a Mac Apple Silicon-based devices (e.g. Apple M1)
pip uninstall grpcio; conda install -c conda-forge grpcio=1.43.0

# install the skypilot cli and dependency, for the clouds you want, e.g. GCP
pip install "skypilot[aws,gcp] @ git+https://github.com/skypilot-org/skypilot.git"

# Configure your cloud credentials. This is a GCP example. See https://skypilot.readthedocs.io/en/latest/getting-started/ installation.html for examples with other cloud providers.
pip install google-api-python-client
conda install -c conda-forge google-cloud-sdk
gcloud init
gcloud auth application-default login

# install llm-atc
pip install llm-atc
```

## Fine tuning

We currently support Vicuna style finetuning. An example finetune dataset would be a JSON file, `vicuna_test.json` with the following format.

```
[
  {
    "id": "identity_0",
    "conversations": [
      {
        "from": "human",
        "value": "Who are you?"
      },
      {
        "from": "gpt",
        "value": "I am Vicuna, a language model trained by researchers from Large Model Systems Organization (LMSYS)."
      },
      {
        "from": "human",
        "value": "What can you do?"
      },
      {
        "from": "gpt",
        "value": "I can chat with you."
      }
    ]
  },
]
```

To use this dataset for finetuning, for example run.

```
llm-atc train --model_type vicuna --finetune_data ./vicuna_test.json --name myvicuna --description "This is a finetuned model that just says its name is vicuna" -c mycluster --cloud gcp --envs "MODEL_SIZE=7 WANDB_API_KEY=<my wandb key>" --accelerator A100-80G:4
```

What happens under hood is LLM-ATC uses [SkyPilot](https://skypilot.readthedocs.io/en/latest/) to provision you the requested GPU instance amongst the clouds that you have authenticated. The finetuned data `./vicuna_test.json` is synced from your localhost to the machine for training. This can also be a cloud uri e.g. `s3://my_bucket/vicuna_test.json`. The finished model will be saved to an object store (by default whatever cloud you train on, and if not S3). This allows your model weights to be accessible from anywhere later when you want to serve.

## Serving

LLM-ATC handles serving for both finetuned models and models hosted on HuggingFace. We use `llm-atc serve` as in the following.

```
# serve an llm-atc finetuned model, requires `llm-atc/` prefix and grabs model checkpoint from object store
llm-atc serve --name llm-atc/myvicuna --accelerator A100:1 -c serveCluster --cloud gcp --region asia-southeast1

# serve a HuggingFace model, e.g. `lmsys/vicuna-13b-v1.3`
llm-atc serve --name lmsys/vicuna-13b-v1.3 --accelerator A100:1 -c serveCluster --cloud gcp --region asia-southeast1
```

Again, LLM-ATC will automatically find a gpu instance for you across many clouds. Once serving is ready, you should see the following output indicating that an openAI API server is ready on the cluster head.

```
(task, pid=20553) INFO:     Started server process [46350]
(task, pid=20553) INFO:     Waiting for application startup.
(task, pid=20553) INFO:     Application startup complete.
(task, pid=20553) INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
```

You can forward the server to your localhost and test the endpoint.

```
# In one terminal
ssh -N -L 8000:localhost:8000 mycluster

# In another terminal, see what models are available
curl http://localhost:8000/v1/models

# Chat completion request
curl http://localhost:8000/v1/chat/completions   -H "Content-Type: application/json"   -d '{
    "model": "myvicuna",
    "messages": [{"role": "user", "content": "Hello! What is your name?"}]
  }'
```

## Coming Soon

We plan on adding support for more finetuning methods and base models in the future. We'll be adding integrations so that you can connect your custom models to your favorite LLM tools like LangChain and LlamaIndex. In the meantime, check out [the GitHub repository](https://github.com/Trainy-ai/llm-atc).

- [LLM ATC documentation](https://llm-atc.readthedocs.io/en/latest/index.html)
- [LLM ATC Github](https://github.com/Trainy-ai/llm-atc)
