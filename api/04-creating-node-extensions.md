---
title: Node Integration with Extensions
---

This document outlines how to create node extensions for **Phoenix Code**.

## What are Node Extensions

Node extensions for Phoenix Code enhance the desktop version by enabling Node.js capabilities and access to npm packages. Standard extensions run in both browser and desktop builds, but only desktop builds support Node.js execution. Browser builds do not support Node.js, so extensions must handle this limitation.

## How to create a Node Extension

To create a new node extension for Phoenix Code, use [this template](https://github.com/phcode-dev/extension-node-template). This template extension works in the browser as well as desktop builds. In browser, it will not use node, and node.js based functionalities are not available. Desktop builds can use node capabilities.

In desktop builds, there is an additional capability to execute node.js code. This is helpful if you want to extend the functionality of Phoenix Code using the vast npm library.

For creating extensions that do not need node, use: [https://github.com/phcode-dev/extension-template](https://github.com/phcode-dev/extension-template)


## Setting up node extensions

In package.json, add the following section

```
{
    "nodeConfig": {
        "nodeIsRequired": false,
        "main": "node/index.js",
        "npmInstall": "node/"
    }
}
```

## nodeConfig Object

The nodeConfig object indicates that this is a Node extension.
### nodeIsRequired Field

Set this field to `true` if the extension relies on Node and won't function without it.
If set to `false` or omitted, the extension can still be loaded in browser versions of Phoenix code without Node support, but it will use Node in native builds.
It will be shown in the extension manager dialog in browser builds as well.

### main Field

Specifies the main entry point for the Node.js component of the extension.
Should point to the main JavaScript file for the Node part of the extension.
Example: "main": "node/index.js"

### npmInstall Field (Optional)

Specifies the path to run npm install when the user installs the extension from the extension manager.
It's advisable not to package node_modules inside the extension. Only the package lock file should be distributed.
Example: "npmInstall": "node/"

## Communicating between node.js and Phoenix Code

Use the [NodeConnector-API](https://docs.phcode.dev/api/API-Reference/NodeConnector) to call functions and send events between your node.js and Phoenix Code extension components.

This is available as a global object global.createNodeConnector.

[EventDispatcher-API](https://docs.phcode.dev/api/API-Reference/utils/EventDispatcher) is also available in the global context as global.EventDispatcher for event trigger/listen within node.


## Using this template
[Click Here](https://github.com/phcode-dev/extension-node-template/blob/main/README.md#using-this-template) for the instructions on how to use this template.