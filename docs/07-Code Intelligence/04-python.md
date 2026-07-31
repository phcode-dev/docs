---
title: Python
slug: "/Features/python-code-intelligence"
---

**Phoenix Code** supports full code intelligence for Python: completions with documentation, parameter hints, hover info, Go to Definition, Find Usages, and type error checking with quick fixes in the Problems panel.

Everything works the same way as in [JavaScript & TypeScript](./js-ts-code-intelligence).

:::info Desktop Only
Python code intelligence runs in the desktop app.
:::

## Automatic Setup

Python support is powered by [Pyrefly](https://pyrefly.org), a language server built by Meta. Phoenix Code downloads it (~25 MB) the first time you open a Python file. The progress shows in the status bar, with a stop button to cancel.

<!-- TODO: PLUTO - add image here showing the python setup task in the status bar -->

> Updates are automatic, and if you are offline, the download waits for a connection.

To turn Python code intelligence off, set the `codeIntelligence.python` [preference](/docs/editing-text#editing-preferences) to `false`. Setting it back to `true` downloads the server again.

## Formatting with Ruff

The download also includes [Ruff](https://docs.astral.sh/ruff/), a Python formatter. The [Beautify Code](/docs/Features/beautify-code) command uses it to format your Python files.

If your project has its own Ruff config (`pyproject.toml` or `ruff.toml`), it is respected, so formatting matches what you get on the command line.
