---
title: PHP
slug: "/Features/php-code-intelligence"
---

**Phoenix Code** supports full code intelligence for PHP: completions with documentation, parameter hints, hover info, Go to Definition, Find Usages, and error checking in the Problems panel.

Everything works the same way as described in [Code Intelligence](./Code%20Intelligence).

:::info Desktop Only
PHP code intelligence runs in the desktop app.
:::

## Automatic Setup

PHP code intelligence is powered by [Intelephense](https://intelephense.com). Phoenix Code downloads it the first time you open a PHP file. The progress shows in the status bar, with a stop button to cancel.

![PHP setup task](../images/codeIntelligence/php-setup.png "The PHP setup task in the status bar")

> Updates are automatic, and if you are offline, the download waits for a connection.

To turn PHP code intelligence off, set the `codeIntelligence.php` [preference](/docs/editing-text#editing-preferences) to `false`. Setting it back to `true` downloads the server again.

> HTML, CSS, and JavaScript inside your PHP files keep their existing code hints. Intelephense handles only the PHP parts.

## Premium Features

The free version of Intelephense covers everything described above. If you own an [Intelephense premium license](https://intelephense.com), set the `php.licenseKey` [preference](/docs/editing-text#editing-preferences) to your license key, or to the path of your license file.

## Running PHP Pages

This page is about editing PHP. To preview PHP pages in the Live Preview, see [PHP Live Preview Setup](/docs/Features/Live%20Preview/php-live-preview).
