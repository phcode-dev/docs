---
title: Use node.js from your extension
---

This document outlines how to create node extensions for **Phoenix Code**.

## What is a Node Extension?

Node Extensions in Phoenix Code bring the power of Node.js to your desktop development environment, unlocking access to the vast npm ecosystem for building feature-rich extensions. By leveraging Node.js runtime capabilities, these extensions can perform system-level operations like executing commands, accessing local files, or integrating with external applications – functionalities that aren't possible in traditional browser-based extensions.

One of the key advantages of Node Extensions is their ability to handle computationally intensive tasks without impacting the editor's performance. While browser-based extensions run in the main thread and can potentially freeze the UI during heavy processing, Node Extensions can offload these operations to separate processes. This makes them ideal for scenarios involving extensive image processing, code analysis, or other resource-demanding tasks. Whether you're building a system integration tool or implementing complex background processing, Node Extensions provide the perfect foundation for creating powerful, responsive extensions in Phoenix Code's desktop environment.
For cross-platform compatibility between desktop and browser environments, you can alternatively use Web Workers to handle computation-intensive tasks. This approach requires bundling any npm dependencies using webpack or similar tools before they can run in the browser. Check out our [Web Worker Communication guide](https://docs.phcode.dev/api/API-Reference/worker/WorkerComm) for detailed instructions on implementing and managing Web Workers in your extension.

Important: When using Node Extensions for heavy computational tasks, make sure to fork a separate Node.js process or worker rather than running operations in the main Node.js process. This separation ensures optimal performance and stability of your extension within Phoenix Code.

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