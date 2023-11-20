---
title: 'Function Calling with Gorilla LLM'
date: '2023-11-20'
draft: false
summary: Host your own function calling LLM.
tags: [Serving, Function Calling]
canonicalUrl: gorilla
authors: ['default']
---

[Function calling in the OpenAI chat completion API](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models) can be used in combination with external functions to provide function arguments by interpreting natural language queries. Recently, an open source model, [Gorilla OpenFunctions](https://gorilla.cs.berkeley.edu/blogs/4_open_functions.html), was released by UC Berkeley which is fine tuned for function calling. Here, we'll show how you can host and query your own Gorilla OpenFunctions deployment.

First, create a deployment of Gorilla, which you can do with the `llm-atc` utility.

```bash
# create a Gorilla deployment
llm-atc serve --name gorilla-llm/gorilla-openfunctions-v1 -c testvllm --accelerator V100:1

# get the IP of the deployment
sky status --ip testvllm
```

Let's define a function that gives us the weather by providing the location of interest.

```python
functions = [
    {
        "name": "get_current_weather",
        "description": "Get the current weather in a given location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g. San Francisco, CA",
                },
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": ["location"],
        },
    }
]
```

We need to follow the function prompt template for OpenFunctions. You can use the following function to construct the prompt (credit to Shishir Patil).

```python
def get_gorilla_response(prompt="Call me an Uber ride type \"Plus\" in Berkeley at zipcode 94704 in 10 minutes", model="gorilla-openfunctions-v1", functions=[]):
  def get_prompt(user_query, functions=[]):
    if len(functions) == 0:
        return f"USER: <<question>> {user_query}\nASSISTANT: "
    functions_string = json.dumps(functions)
    return f"USER: <<question>> {user_query} <<function>> {functions_string}\nASSISTANT: "
  prompt = get_prompt(prompt, functions=functions)
  try:
    completion = openai.ChatCompletion.create(
      model=model,
      temperature=0.0,
      messages=[{"role": "user", "content": prompt}],
    )
    return completion.choices[0].message.content
  except Exception as e:
    print(e, model, prompt)
```

The `get_gorilla_response` will return a string corresponding to the appropriate API call. For example,

```python
get_gorilla_response("What's the weather in Los Angeles in degrees Fahrenheit?", functions=functions)
# 'get_current_weather(location="Los Angeles", unit="fahrenheit")'
```

When programming agents, we want access to the actual function arguments. For a Python API like the one above we can extract the function name and arguments by using a regex. The following function uses regular expressions to extract these into a JSON dictionary.

```python
def extract_function_arguments(response):
    """
    Extracts the keyword arguments of a function call from a program given as a string.

    :param response: The response from gorilla open functions LLM
    :return: A list of dictionaries, each containing key-value pairs of arguments.
    """

    # regex to match the name of the function call
    pattern = r"([^\s(]+)\("
    function_name = re.findall(pattern, response)[0]

    # Define a regex pattern to match the function call
    # This pattern matches the function name followed by an opening parenthesis,
    # then captures everything until the matching closing parenthesis
    pattern = rf"{re.escape(function_name)}\((.*?)\)"

    # Find all matches in the program string
    match = re.findall(pattern, response)[0]

    arg_pattern = r"(\w+)\s*=\s*('[^']*'|\"[^\"]*\"|\w+)"
    args = re.findall(arg_pattern, match)

    # Convert the matches to a dictionary
    arg_dict = {key.strip(): value.strip() for key, value in args}
    return {
       "name" : function_name,
       "arguments" : arg_dict,
    }
```

For the LA weather example, using this we would have.

```python
{
    "name" : "get_current_weather",
    "arguments" : {
        "location" : "Los Angeles",
        "units" : "fahrenheit"
    },
}
```

As with any LLM, there are risks of hallucinations which are even more important given the hard syntax requirements of function calls. Make sure to have error handling when using the results of these outputs. The full code for this example can be found [here](https://github.com/Trainy-ai/llm-atc/tree/main/examples/gorilla_open_functions)

## References

- [LLM-ATC docs](https://llm-atc.readthedocs.io/en/latest/)
- [Gorilla LLM Open Functions](https://gorilla.cs.berkeley.edu/blogs/4_open_functions.html)
