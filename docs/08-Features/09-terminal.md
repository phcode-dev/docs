---
title: Terminal
---

Phoenix Code has a built-in terminal so you can run commands without leaving the editor.

> The terminal is available only in desktop apps.

<!-- Add an image here showing the terminal panel with a couple of tabs and a running command -->

## Opening the Terminal

There are a few ways to open the terminal:

- Click the **Tools** button *(grid icon)* in the bottom-right toolbar and select **Terminal**
- Go to **View > Terminal** from the menu bar
- Press `F4`

## Tabs

You can have multiple terminals open at the same time, each in its own tab. The tab sidebar shows the running process name for each terminal.

To create a new tab, click the **+** button at the bottom of the tab sidebar.

To close a tab, hover over it and click the **X** button. If a process is still running, Phoenix Code asks for confirmation before closing.

<!-- Add an image here showing the tab sidebar with multiple terminal tabs -->

## Shell Selection

Click the **dropdown button** *(chevron icon)* next to the new tab button to pick a different shell. The available options depend on your operating system:

- **macOS**: zsh, bash, fish
- **Linux**: bash, zsh, fish
- **Windows**: PowerShell, Command Prompt, Git Bash, WSL

Selecting a shell sets it as the default and opens a new terminal with it right away.

> Only shells that are installed on your system are shown.

## Right-Click Menu

Right-click inside the terminal to access:

- **Copy** - copy selected text
- **Paste** - paste from clipboard
- **Clear Terminal** - clear the terminal output

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Toggle terminal | `F4` |
| Switch focus between editor and terminal | `Shift + Escape` |
| Clear terminal buffer | `Ctrl/Cmd + K` |
