---
title: "Live Preview"
description: ""
lead: ""
date: 2022-03-23T07:23:12+05:30
lastmod: 2022-03-23T07:23:12+05:30
draft: false
images: []
menu:
  docs:
    parent: "features"
weight: 700
toc: true
---

Live preview helps to visually see the effect of code changes in the editor side
by side.

## Pre requisite

Live preview works only with files that can be rendered in the browser. For that
reason, currently, we support only `HTML` and `md` files for live preview.

## Getting started

To start a live preview, first, open your project in phoenix. Then open an
`html` or `md` file. Finally, click the live preview button
![](https://docs-images.phcode.dev/images/live-preview/live-preview-button-inactive.png)
on the top right toolbar to start the live preview. Once the button
![](https://docs-images.phcode.dev/images/live-preview/live-preview-button-inactive.png)
is clicked, a live preview window will be loaded inside the editor.

 <figure>
 <img src="https://docs-images.phcode.dev/images/live-preview/live-preview-in-action.gif"  width="600" height="300" title="Live preview in action">
    <figcaption><b>Live-preview in action</b> </figcaption>
</figure>

The live preview button has three states, as shown in the table

| Live-preview button states                                                               | what it means.                         |
| ---------------------------------------------------------------------------------------- | -------------------------------------- |
| ![](https://docs-images.phcode.dev/images/live-preview/live-preview-button-inactive.png) | Live preview is inactive or not loaded |
| ![](https://docs-images.phcode.dev/images/live-preview/live-preview-loading.png)         | Live preview loading in progress       |
| ![](https://docs-images.phcode.dev/images/live-preview/live-preview-active.png)          | Live preview has started               |
