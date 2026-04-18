---
title: AI Chat
---

Phoenix Code comes with a built-in AI assistant powered by Claude Code. You can ask it to write code, fix bugs, explain files, and more. The AI can read and edit your project files, run terminal commands, take screenshots of your Live Preview, and work alongside you as you code.

> AI Chat is available only in desktop apps. Free users get a daily and monthly chat limit. [Upgrade to Phoenix Code Pro](https://phcode.io/pricing) for unlimited access.

<!-- Add an image here showing the AI Chat panel in the sidebar with a conversation -->

## Getting Started

AI Chat requires the Claude Code CLI to be installed on your machine. If it's not installed, Phoenix Code shows a setup screen with the install command for your platform.

Once installed, click **Set up Claude Code** to log in. Phoenix Code detects when the login is complete and opens the chat panel automatically.

<!-- Add an image here showing the setup/install screen -->

## Opening the AI Panel

Click the **AI tab** *(sparkle icon)* in the sidebar to open the chat panel.

<!-- Add an image here showing the AI tab in the sidebar -->

## Sending Messages

Type your message in the input box at the bottom and press `Enter` to send. Press `Shift + Enter` to add a new line.

While the AI is working, you can type your next message. It shows up as a queued message and gets sent automatically once the AI finishes its current response.

### Context

Phoenix Code automatically provides context about what you're working on. Small chips appear above the input box showing:

- **Selection** - the file and line range you have selected in the editor
- **Cursor** - your current line and file
- **Live Preview** - if the Live Preview panel is open

You can dismiss any of these by clicking the **x** button on the chip.

## Attachments and Screenshots

Click the **paperclip button** to attach files from your project. You can attach images (PNG, JPG, GIF, WebP, SVG) and other files like code or documents.

Click the **camera button** to take a screenshot and attach it. The dropdown lets you choose what to capture:

- **Live Preview** - your Live Preview panel (if open)
- **Selected Element** - the currently selected element in Live Preview
- **Full Editor** - the entire editor window
- **Area** - a custom region you select with a crop tool

## Permission Modes

The AI has three permission levels that control how much it can do on its own. Click the **permission label** at the bottom of the panel to cycle between them.

- **Plan** - the AI proposes a plan first. You review it and click **Approve** to proceed or **Revise** to give feedback. Good for complex tasks where you want to stay in control.
- **Edit** (default) - the AI can read and edit files on its own, but asks for your approval before running terminal commands.
- **Full Auto** - the AI works through everything without pausing. Terminal commands still ask for confirmation.

<!-- Add an image here showing the permission mode selector -->

## Session History

Every conversation is saved automatically. Click the **history dropdown** at the top of the panel to see your recent sessions and switch between them.

Sessions are saved per project, so each project has its own chat history.

## Undo and Restore

Before the AI makes any edits, Phoenix Code creates a **restore point**. If you don't like the changes, click **Undo** on the edit summary card to revert all the files back to how they were.

If the AI made changes across multiple responses, you can click **Restore to this point** on any earlier edit summary to go back to that state.

<!-- Add an image here showing an edit summary card with the Undo button and file change stats -->

## Settings

Click the **gear icon** in the chat panel to open AI settings. Here you can:

- Switch between AI providers
- Add a custom API provider with your own API key and endpoint
- Set a custom API timeout

<!-- Add an image here showing the AI settings dialog with provider configuration -->

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Send message | `Enter` |
| New line | `Shift + Enter` |
| Cycle permission mode | `Shift + Tab` |
| Cancel or clear input | `Escape` |
