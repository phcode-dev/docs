---
title: PHP
slug: "/Features/php-code-intelligence"
---

**Phoenix Code** supports full code intelligence for PHP: completions with documentation, parameter hints, hover info, Go to Definition, Find Usages, and error checking in the Problems panel.

Everything works the same way as in [JavaScript & TypeScript](./js-ts-code-intelligence).

:::info Desktop Only
PHP code intelligence runs in the desktop app.
:::

## Installing the Language Server

PHP code intelligence is powered by [Intelephense](https://intelephense.com). Its license does not allow Phoenix Code to ship it, so it is downloaded once, with your permission. The first time you open a PHP file, an install prompt appears:

<!-- TODO: PLUTO - add image here showing the PHP install prompt -->

Click **Install**. Phoenix Code downloads the server and shows the progress in the status bar. From then on everything works automatically, including updates.

If you decline, you can turn it on any time by setting the `php.codeIntelligence` [preference](/docs/editing-text#editing-preferences) to `true`. This offers the install again.

> HTML, CSS, and JavaScript inside your PHP files keep their existing code hints. Intelephense handles only the PHP parts.

## Premium Features

The free version of Intelephense covers everything described above. If you own an [Intelephense premium license](https://intelephense.com), set the `php.licenseKey` [preference](/docs/editing-text#editing-preferences) to your license key, or to the path of your license file.

## Running PHP Pages

This page is about editing PHP. To preview PHP pages in the Live Preview, see [PHP Live Preview Setup](/docs/Features/Live%20Preview/php-live-preview).
