---
title: "Teaching Your Terminal to Talk: A Quick Intro to AI on the CLI"
category: "AI"
date: 2026-02-17
readTime: "3 min read" 
excerpt: "You’ve wired an AI into your terminal, but now what? This post walks through how AI CLIs work under the hood, what “tokens” actually are (and why your bill cares about them), and how to plug models into everyday commands like git, grep, and your shell scripts to quietly outsource the boring parts of development."
status: "published"
---

So you’ve installed an AI CLI tool. Now what?

## Talking to AI from the terminal

The terminal is already where you talk to computers in half-sentences and cryptic flags; adding AI there just means you finally get to be vague on purpose.

A typical AI CLI is a small wrapper around an API from a model provider (OpenAI, Anthropic, Perplexity, etc.). It takes your prompt, turns it into a request to the model, and prints the response back to stdout like any other Unix tool.

At a high level, the flow looks like this:

- You type: `ai "Write a git commit message summarizing these changes"` and pipe in `git diff`.
- The CLI converts your input into JSON, adds some config (model, temperature, max tokens).
- It sends that to the remote model.
- The response comes back as text, which the CLI prints or streams line by line.

No browser tabs, no “loading…” spinners, just your shell and a fast typist who never gets wrist pain.

## What are “tokens” and why should you care?

Models don’t see text the way you do. They see it as **tokens**: chunks of characters that are somewhere between a character and a word. For English, a rough mental model is:

- 1 token ≈ 3–4 characters
- 100 tokens ≈ a short paragraph
- 1,000 tokens ≈ about a page of text

Every request to an AI model is billed and limited in tokens, not characters:

- Input tokens: your prompt (plus any system instructions and history).
- Output tokens: the model’s reply.
- Total tokens: input + output, which must fit under the model’s context window (for example, 8k, 32k, 200k tokens, depending on the model).

This is why some CLIs show a little `prompt: 350 tokens, completion: 200 tokens` footer. It’s not showing off; it’s letting you know:

- Why your “simple” command suddenly got slow.
- Why the API complained about context length.
- Why your bill looks like it secretly includes a second Netflix subscription.

If you’re scripting this, you’ll often want:

- A way to cap max output tokens (to avoid essays when you asked for a one-liner).
- A way to trim or summarize past conversation history to stay under limits.

## What can you actually do with an AI CLI?

The fun part is not typing to an AI; it’s wiring it into everything else.

Some practical patterns:

- Inline docs: `ai "Explain this function in plain English" < myfile.js`
- Commit messages: `git diff | ai "Write a concise commit message."`
- Shell-fu assistant: `ai "Give me a one-line bash command to find all .log files modified in the last 24 hours and delete them, but ask for confirmation first."`
- Refactoring ideas: `ai "Suggest a more idiomatic version of this code" < handler.py`
- Quick translators: `pbpaste | ai "Translate this to clear, simple English and keep it under 3 sentences."`

Because the CLI just reads stdin and writes stdout, it plays nicely with your usual suspects:

- `fd`, `rg`, `jq`, `xargs`, `pbpaste` / `pbcopy`, etc.
- Shell scripts that turn into “AI macros” for your daily work.

Example: a tiny helper that explains any error you paste in:

```bash
explain-error() {
  pbpaste | ai "Explain this error and suggest concrete steps to fix it."
}
```

Now your debugging buddy is one command away, and unlike Stack Overflow, it doesn’t close your question as “off-topic”.

## Configuring an AI CLI (without losing your mind)

Most tools follow the same pattern:

- API key: from your provider, usually via an env var like `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`.
- Model: a flag or config file, for example `--model gpt-4.1-mini` or similar.
- Temperature: how “creative” the model is (lower for deterministic answers, higher for brainstorming).
- Format: plain text by default; sometimes `--json` for structured output.

A minimal `~/.ai/config` might look like:

```toml
provider = "openai"
model = "gpt-4.1-mini"
temperature = 0.3
max_output_tokens = 512
```

Once this is set, your day-to-day usage becomes:

- `ai "Summarize this log into 3 bullet points." < app.log`
- `ai --json "Given this error trace, output a JSON object with fields: cause, file, line, suggested_fix." < trace.txt`

From there, it’s just another tool in your terminal, like `grep` but less grumpy.

***

If this post felt suspiciously on-brand, concise, and oddly patient for something written after a long day of debugging shell scripts… let’s just say the author had some very capable “help” from the same kind of CLI it just described.