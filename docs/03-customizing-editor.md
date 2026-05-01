---
title: Customizing the Editor
draft: true
---

> **DRAFT — outline only.** Bullet points below capture what each subsection will cover. Convert to prose + screenshots/videos in a later pass. Remove this banner and the `draft: true` frontmatter when ready to publish.

This section covers everything that lets you make **Phoenix Code** look and feel the way you want — from full themes down to individual visual toggles.

---

## Themes
*(Move existing content from `08-Features/13-themes.md`. Update with new themes shipped this release.)*

- What themes are and how they affect the editor
- Built-in themes — list with screenshots
  - **Phoenix Dark Neo** (renamed from previous "Phoenix Dark")
  - **Phoenix Light Neo** (renamed from previous "Phoenix Light")
  - **Dark Phoenix** (NEW this release)
  - All other built-in themes — list and short description
- Switching themes
  - Via Extension Manager → Themes tab → Apply
  - Via `View` menu (if applicable)
- Installing a new theme from the marketplace
- Removing an installed theme
- Creating your own theme — link to Theme Template repo
- Preference key reference (where applicable)

---

## Zoom UI and Font Size
*(Move existing content from `03-editing-text.md` → "Zoom and Font Size Adjustments".)*

- What zoom does vs. font size adjustment (UI scale vs. editor text only)
- Zoom UI: In / Out / current level shown in menu
- Font Size: Increase / Decrease / Restore
- **HUD zoom percentage overlay** (NEW) — appears briefly on zoom in/out
- Using the menu (`View > Zoom UI and Fonts`)
- Keyboard shortcuts table

---

## Line Height
*(Move existing content from `03-editing-text.md`.)*

- What it does — vertical spacing between lines
- Adjusting via `View > Themes...` → Line Height slider (1 to 3, default 1.5)
- Modifying via preferences — `themes.editorLineHeight`
- Cross-link to new Preferences page

---

## Indent Guide Lines
*(Move existing content from `03-editing-text.md`.)*

- What they are — vertical lines showing indentation levels
- Enabling / disabling via `View > Indent Guide Lines`
- Preference keys
  - `editor.indentGuides` — on/off
  - `editor.indentHideFirst` — hide the first guide line
- Cross-link to new Preferences page

---

## Editor Rulers
*(Move existing content from `08-Features/03-editor-rulers.md`.)*

- What rulers are — vertical guides at column positions
- How to configure (preferences / settings)
- Common use cases (80-col / 120-col line length guidance)

---

## Sidebar Collapse Toggle (NEW)
*(NEW feature — titlebar control shipped this release.)*

- What it does — collapses/expands the main sidebar from the titlebar
- Where the toggle button lives (titlebar, near app menu)
- Keyboard shortcut (if any)
- Difference from drag-to-collapse the sidebar resizer

---

## Tabbed Sidebar (NEW)
*(NEW feature shipped this release — main sidebar now supports tabs.)*

- What it is — multiple panels accessible as tabs in the main sidebar
- What tabs ship by default (Files, Git, Extensions, etc.)
- Switching between tabs
- Adding / removing / reordering tabs (if user-controllable)

---

## No-Distractions Mode
*(Move existing content from `03-editing-text.md`.)*

- What it does — hides non-essential UI for focused editing
- Toggle via `View > No-Distractions Mode`
- Keyboard: `Shift + F11`
- What gets hidden vs. what stays
- (Note: Design Mode also affects UI visibility — link out to Design Mode docs once they exist)

---

## Where to next
- For changing what your code *says*, see [Editing Text](./editing-text)
- For syntax colors, see [Editing Colors](./editing-colors)
- For low-level configuration of all settings, see Preferences *(link once page exists)*
