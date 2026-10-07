---
title: Models and Providers
slug: "/Pro Features/ai-models"
---

## Choosing a Model

The model name sits at the left of the panel header once a chat has started. It appears when you move the pointer over the panel. Click it to pick a different model.

![Model dropdown in the chat header](../images/pro/ai-model-dropdown.png "The model dropdown")

- **Default**: Lets Claude Code pick, using the model setting of your Claude account. The row shows which model that is right now, for example *Currently Fable*.
- The models your account offers, with a short description of each. The list comes from Claude Code, so it matches what your plan includes.

You can switch models in the middle of a chat. The new model takes over from your next message and keeps the conversation history. The message box placeholder shows which model you are talking to, like *Ask Opus 5.5...*.

> The model dropdown belongs to Visual AI. In a CLI session, pick the model inside the CLI.

## Settings

Click the **gear** button in the panel header, or the **AI Settings** link on the start screen, to open the settings dialog.

![AI Settings dialog](../images/pro/ai-settings-dialog.png "The AI Settings dialog on the Claude Code tab")

The dialog has a tab for each CLI: **Claude Code**, which also covers Visual AI, and **Codex**. Each tab has:

- **Active Provider**: Which provider to use. **Default** uses the CLI's own login.
- **Providers**: The custom providers you have added, with **Edit** and **Delete** buttons.
- **Path to the executable**: Where the CLI is installed. Leave it blank to let Phoenix Code find it.
- **Connect to Phoenix**: Whether a CLI started from the panel is connected to the editor. See [Claude Code CLI and Codex CLI](./06-ai-cli.md#connected-to-phoenix).

At the bottom, **Enable AI features** switches AI on or off. See [Turning AI Off](./10-ai-disable.md). Click **Done** to save your changes, or **Cancel** to drop them.

### Adding a Provider

Click **+ Add Provider** to use your own API key or endpoint:

![Add provider form](../images/pro/ai-settings-provider-form.png "The provider form")

- **Name**: Any name you like.
- **API Key**: Your key. It is stored encrypted on this computer.
- **Base URL**: The endpoint of the provider. Leave it blank to use the provider's default.
- **API Timeout (ms)**: How long to wait for a reply. Claude Code only.

Click **Save Provider**, then pick it under **Active Provider** and click **Done**. When a provider with a base URL is active, the chat shows a one-time **Using custom API endpoint** notice on your next message.

With a Claude Code provider that has an API key, Visual AI works without a Claude login.

### Compatible Providers

- **Anthropic Claude** (default): Recommended. Create an API key at [platform.claude.com](https://platform.claude.com).
- **z.ai GLM**: Tested working as a drop-in alternative. Use z.ai's Anthropic-compatible endpoint as the base URL.
- **Other Anthropic-compatible providers**: Add the provider's base URL and API key on the Claude Code tab.
- **OpenAI-compatible providers**: Add them on the Codex tab. They apply to the Codex CLI.
