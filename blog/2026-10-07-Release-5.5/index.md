---
slug: release-5.5
title: "Phoenix Code 5.5.6: Layers, Visual AI & ChatGPT Codex"
description: "See and edit your page’s HTML structure, try design ideas with Phoenix AI, and bring ChatGPT Codex and Claude Code CLI into a visual workflow. Plus simpler AI setup, demos, usage graphs, and photo search."
authors: [arun, devvaannsh]
tags: [Live Preview Edit, AI, Claude Code, Git, Phoenix Pro, Windows, Linux, Mac, Release]
---

Phoenix Code 5.5.6 is now available at [phcode.dev](https://phcode.dev).

See and edit your HTML with the new [Layers panel](#explore-your-page-with-layers), [try AI design ideas on your page](#try-the-options-on-your-page), [explore interactive replies in chat](#interactive-replies-in-chat), and [bring your existing CLI agents into Phoenix Code](#bring-your-existing-cli-agents-into-phoenix-code). There’s also [simpler AI setup](#simpler-ai-setup), [AI demos](#ai-demos), [usage graphs](#ai-usage-graphs), [thinking effort](#choose-how-much-ai-thinks), and [photo search](#find-the-right-photo-with-ai).

## Explore your page with Layers

See and edit your page’s HTML structure in the new **Layers** sidebar, with changes synced to your code and Live Preview. Select an element in the panel to find it on the page, or select it on the page to see its place in the HTML structure.

Rearrange elements by dragging, insert something new, duplicate a section, or cut and paste it elsewhere. Edit tags, IDs, classes, and attributes in the Properties section, with code hints as you type. Your edits go straight back to the source.

The Styles section shows the CSS rules behind the selected element. Change a value, add a declaration, pick a color, or drag a number to adjust it while watching the page. You can copy and paste CSS properties, open a rule in the editor, or send it to the Styles Bar for visual editing.

If a style isn’t showing up, you can see why and find the style being used instead. Hidden elements report why they are hidden. The tree can also show elements created by JavaScript; these are marked so you can distinguish them from elements in your HTML source.

Search the tree, navigate with the keyboard, and resize or collapse each section to fit the way you work. Layers also works with Live Preview opened in a separate browser window.

> The Layers panel is included with Phoenix Pro.

## Point to it and Ask AI

Select an element in Live Preview and click **Ask AI**. The question carries a screenshot and an element reference, so a request like “give this card more breathing room” has the context it needs.

You can also select code in the editor or text in the Markdown preview and ask about that selection. Keep the conversation beside your work in a movable composer, add more context, or attach an image from the clipboard.

Send the question to Visual AI, or transfer the draft and its attachments to a connected ChatGPT Codex or Claude Code CLI session. In a CLI session, you review the transferred draft and press Enter to submit it.

## Try the options on your page

Phoenix AI can create interactive questions around the design you are exploring, with choices and controls you can try on your page. Compare layouts, colors, and styles in Live Preview before choosing what goes into your code. The AI can shape the question and its controls to suit the idea you are working on.

Hover over an option for a temporary preview. Click it to keep that preview and put the choice in the reply box. You can continue comparing options or write your own answer; **Send** confirms your choice for the AI to apply to the source.

## Interactive replies in chat

Phoenix AI can create interactive mockups, comparisons, and explanations in the chat. Click through options and adjust controls to explore an idea, instead of piecing it together from a text description. You can use these visuals even without a page open in Live Preview.

Explore the result and use **See code** to inspect or copy the code behind it. Connected CLI sessions can present interactive questions in their own pane too.

## Bring your existing CLI agents into Phoenix Code

Bring your existing agents into Phoenix Code and give them a visual way to work with you. **ChatGPT Codex** and **Claude Code CLI** gain tools to prototype designs in Live Preview, show interactive choices, and ask questions on your page—so you can see, try, and refine ideas instead of just reading descriptions.

Connected agents can work with the file you are editing, your unsaved text, Live Preview, and the Problems panel. They can take screenshots, open files, and help you find the right photos for your design.

Keep multiple named sessions running, switch between them, and stop or restart each one independently. The start screen shows your running sessions so you can return to the work you need.

> Embedded CLI sessions are a Phoenix Pro feature in the desktop apps.

## AI usage graphs

See your AI usage across Phoenix AI, ChatGPT Codex, and Claude Code CLI sessions in Phoenix. Track tokens, estimated costs, and model breakdowns, with daily activity graphs and monthly history.

Check the usage meter for the current chat, or open the usage card to explore your activity over time. You can also delete usage history for a chosen period while keeping your conversations.

Cost figures are estimates at API list prices. Your subscription or provider bill may differ; these figures are not an additional charge from Phoenix Pro.

## Simpler AI setup

Get from signing in to creating with AI more easily, with guided setup in Phoenix Code. The start screen brings Phoenix AI, ChatGPT Codex, and Claude Code CLI together and helps you get started with the way you want to work.

Conversations are easier to follow too: completed tool calls fold into compact groups that list the files read or changed. A single **+** menu brings together files, folders, and screenshots, while chat history shows session titles and prompts to help you find earlier work.

## AI demos

See what you can create with Phoenix AI before signing in or using any AI credits. Watch a page take shape, explore the result, and reveal the prompt behind it. Click **Surprise Me** to try it.

After the demo, you can explore another example or start creating something of your own.

## Choose how much AI thinks

The new **Thinking effort** control lets you choose how much reasoning Visual AI uses on models that support it. Pick a lower effort for a quick task or a higher effort for a harder problem, or leave it at Default. Phoenix shows the choices supported by the selected model.

> Visual AI, Ask AI, interactive AI content, and AI usage tools are available in the desktop apps.

## Find the right photo with AI

Find the right photos for your page together with AI. Browse and compare options in an interactive gallery, refine the search, and choose what fits your design. Open a photo for a closer look or select several to use together.

Use the photos on your page or download them into your project. Downloads appear in the file tree, ready for your next edit.

## A closer look at Markdown images and larger media

Images in Markdown now open in a larger lightbox. In reader mode, click an unlinked image; while editing, use its expand button or double-click. Press Escape to return to the document.

Desktop video and audio previews now stream files instead of loading the whole file into the editor. This removes the previous 16 MB preview limit on desktop and lets you seek through larger recordings without keeping a full copy in the page's memory.

## Terminal and Git improvements

- **Name your terminals.** Rename terminal tabs so you can tell your development server, build, and shell apart.
- **Keep your bearings after a project switch.** A notice lets you keep existing terminals running or restart them in the new project's folder, with confirmation when active processes would be stopped.
- **Open terminal links.** Applications that print clickable terminal hyperlinks can now open them in your default browser.
- **See what has been pushed.** Git history marks the last pushed commit and identifies the local commits above it. Branches that have not been pushed get a clear indication too.
- **Open projects without Git interruptions.** Projects without a repository no longer trigger a “getting remotes” error dialog.

## Notable fixes and performance improvements

- Fixed a race where a delayed file reload could overwrite text typed or saved while the reload was in progress. ([Change](https://github.com/phcode-dev/phoenix/commit/e00a5a588))
- Fixed stale Markdown preview updates reverting newer edits made in the code editor. ([Change](https://github.com/phcode-dev/phoenix/commit/f2f2382fb))
- Live Preview reconnects after a dropped connection, and incomplete HTML is handled more reliably while you type. ([Reconnect](https://github.com/phcode-dev/phoenix/commit/44e914f2c), [HTML editing](https://github.com/phcode-dev/phoenix/commit/9b57186ae))
- Reduced repeated CSS parsing, page measurements, and tree rebuilding during selection and editing in Live Preview and Layers.
- Fixed JavaScript hints getting stuck while indexing HTML or PHP, and older project preferences arriving after a project switch. ([Hints](https://github.com/phcode-dev/phoenix/commit/1198f7f3a), [Preferences](https://github.com/phcode-dev/phoenix/commit/b24ad37a0))
- Python and PHP language-server setup now limits automatic retries and keeps error details and a manual retry available in the task list. Python tooling also updates to Pyrefly 1.2.0 and Ruff 0.16.5. ([Setup](https://github.com/phcode-dev/phoenix/commit/9325978d4), [Tooling](https://github.com/phcode-dev/phoenix/commit/391fd391b))
- Fixed the sidebar resize handle being left over the editor after the sidebar was collapsed. ([Change](https://github.com/phcode-dev/phoenix/commit/e0107ea35))
- Dropping several files now leaves the last file in the drop order active, regardless of which one loads fastest. ([Change](https://github.com/phcode-dev/phoenix/commit/9d896d2c7))
- Notifications stay open while you hover over them, giving you time to read or use their actions. ([Change](https://github.com/phcode-dev/phoenix/commit/a40ab64e9))
- AI plan review now handles approval, revision, cancellation, and stopping more consistently. Chat also resumes following new messages after you have scrolled back to read older replies.

## Platform and account notes

- **Windows:** Fixed AI multiline edits being rejected when the file and the AI used different line endings. Language-server quick fixes also handle drive-letter capitalization correctly.
- **macOS:** Improved semibold and bold text rendering in the interface.
- **Managed desktop installations:** Administrators can point the updater at a custom update manifest, including a custom Linux installer URL.
- **Phoenix Pro trials:** The introductory trial for new installations is now 8 days, down from 15 days.
- **Accounts:** Desktop sign-in refreshes Pro access immediately, and existing subscribers no longer receive prompts to buy Pro again.

Get the update at [phcode.dev](https://phcode.dev), and let us know what you build in [GitHub Discussions](https://github.com/phcode-dev/phoenix/discussions).
