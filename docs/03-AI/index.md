---
title: AI
slug: "/Pro Features/ai-chat"
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

:::info
Free accounts get a limited number of Visual AI chats each day and month. [Phoenix Code Pro](https://phcode.dev/pricing) removes the limits and adds the Claude Code CLI and Codex CLI inside the panel. See [Free Account Limits](./08-ai-usage.md#free-account-limits).
:::

The **AI panel** puts a coding assistant inside the editor. Ask it to build a page, fix a bug, or restyle a section. It reads your files, edits them, and checks its own work in the Live Preview. Every change it makes can be undone with one click.

> AI is available only in the desktop app.

<VideoPlayer
  src="https://docs-images.phcode.dev/videos/ai/ai-hero.mp4"
/>

## Three Ways to Work

The panel gives you three assistants to choose from. Pick one on the start screen, or switch with the dropdown in the panel header.

- **Visual AI**: The built-in chat, powered by Claude Code. It shows every step as a card, keeps a restore point for each change, and works hand in hand with the Live Preview. This is what most of this section describes.
- **Claude Code CLI** and **Codex CLI**: The real command-line tools from Anthropic and OpenAI, running in a terminal inside the panel. They are connected to the editor, so they can see your open files and use the Live Preview too. See [Claude Code CLI and Codex CLI](./06-ai-cli.md).

## What You Can Do

- **[Chat about your project](./02-ai-chatting.md)**: The AI knows which file you are in, what you have selected, and what the Live Preview shows. Attach files, folders, and screenshots for more context.
- **[Ask about an element](./05-ai-ask.md)**: Click **Ask AI** on a selected element, a Markdown selection, or a code selection. A screenshot and the source location go along with your question.
- **[Decide how much it can do](./03-ai-permission-modes.md)**: Four permission modes, from a plan you approve first to full autonomy.
- **[Review and undo changes](./04-ai-reviewing-changes.md)**: Every edit shows a diff. Roll back any response with **Undo** or **Restore to this point**.
- **[Find photos](./07-ai-images.md)**: Ask for pictures and the AI searches Unsplash, shows the results in the chat, and adds the one you pick to the page.
- **[Watch usage and cost](./08-ai-usage.md)**: Tokens and cost for the current chat, plus a usage calendar on the start screen.
- **[Pick a model or provider](./09-ai-models-providers.md)**: Switch models mid-chat, or bring your own API key and endpoint.

## In This Section

- [Setup](./01-ai-setup.md): Sign in and connect your Claude account.
- [Chatting](./02-ai-chatting.md): The start screen, sending messages, context, attachments, and session history.
- [Permission Modes](./03-ai-permission-modes.md): Plan Mode, AI Edit Mode, Auto, and Allow Everything.
- [Reviewing and Undoing Changes](./04-ai-reviewing-changes.md): Diffs, restore points, and undo.
- [Live Preview and Editor](./05-ai-ask.md): Ask about elements, Markdown, and code, and answer questions the AI asks in the preview.
- [Claude Code CLI and Codex CLI](./06-ai-cli.md): Run the command-line tools inside the panel.
- [Image Search](./07-ai-images.md): Find and use photos from Unsplash.
- [Usage and Cost](./08-ai-usage.md): Tokens, cost, and the usage calendar.
- [Models and Providers](./09-ai-models-providers.md): Choose a model or add a custom provider.
- [Turning AI Off](./10-ai-disable.md): Remove AI from the editor completely.
