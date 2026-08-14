---
title: AI
slug: "/Pro Features/ai-chat"
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

:::info Pro Feature
[Upgrade to Phoenix Code Pro](https://phcode.io/pricing) to access this feature.
:::

Phoenix Code comes with a built-in AI assistant powered by Claude Code. You can ask it to write code, fix bugs, explain files, and more. The AI can read and edit your project files, run terminal commands, take screenshots, and work alongside you as you code.

> AI is available only in desktop apps.

:::note
Free users get a daily and monthly chat limit. Once you're past halfway on either limit, a usage bar appears at the top of the chat. [Upgrade to Phoenix Code Pro](https://phcode.io/pricing) for unlimited access.
:::

<VideoPlayer
  src="https://docs-images.phcode.dev/website/videos/ai-pro-dialog.mp4"
/>

## What you can do

- **[Plan, Edit, and Full Auto modes](./03-ai-permission-modes.md)** let you decide how much freedom the AI has. Plan mode proposes a plan for your approval first, Edit lets the AI edit files but asks before running terminal commands, and Full Auto runs everything without pausing.
- **[Restore points and a visual undo timeline](./04-ai-reviewing-changes.md)** mean every AI change is reversible. If you don't like what it did, roll back with one click.
- **Live preview integration**: the AI can see your running app, take screenshots, click around, and verify its own work.
- **[Choose the model](./05-ai-models-providers.md)** you want, and switch it even in the middle of a chat.
- **[Bring your own provider](./05-ai-models-providers.md#settings)**: Claude from Anthropic (the default) gives the best results, or bring your own API key from any Claude Code CLI-compatible provider.
- **Privacy-first onboarding** with a clear consent dialog and a video walkthrough.
- **[Type while the AI is still working](./02-ai-chatting.md#sending-messages)**: your next message gets queued.
- **[Session history](./02-ai-chatting.md#session-history)** keeps your conversations alive across restarts.
- **Free-tier quotas** let everyone try AI; pro users get unlimited use.

## In this section

- [Setup](./01-ai-setup.md): install Claude Code and connect your Claude account, with or without a Claude subscription.
- [Chatting](./02-ai-chatting.md): send messages, attach files and screenshots, and manage session history.
- [Permission Modes](./03-ai-permission-modes.md): control how much the AI can do on its own.
- [Reviewing and Undoing Changes](./04-ai-reviewing-changes.md): inspect diffs and roll back AI edits.
- [Models and Providers](./05-ai-models-providers.md): pick a model or use a custom API provider.
- [Turning AI Off](./06-ai-disable.md): remove AI from the editor completely.
