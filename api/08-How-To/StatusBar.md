---
title: Add an indicator icon on the status bar
---

This document outlines the basic features of working with Status Bar, including:

* [How to add a button on Status Bar](#adding-a-button-on-status-bar)

---

## Adding a button on Status Bar

1. Import the `StatusBar` module.
    
    ```jsx
    const StatusBar = brackets.getModule("widgets/StatusBar");
    ```
    

2. Register the command.
    
    Register the command that will trigger the clicking.
    
    ```jsx
    var MY_COMMAND_ID = "helloworld_sayhello";
    CommandManager.register("Hello World", MY_COMMAND_ID, handleHelloWorld);
    ```
    

3. Add the button to the StatusBar.
    
    To add the button to StatusBar, use `addIndicator()` :-
    

```jsx
StatusBar.addIndicator(
    MY_COMMAND_ID, // unique ID for this indicator
    $("<div>Test</div>").click(handleHelloWorld), // Optional DOMNode for the indicator
    true, // show the indicator
    "hello-world-status", // CSS class
    "tooltip", // tooltip text
);
```

   → The parameters of the `addIndicator()` method :-

| Param | Type | Description |
| --- | --- | --- |
| id | `string` | Registration id of the indicator to be updated. |
| [indicator] | `DOMNode` or `jQueryObject` | Optional DOMNode for the indicator |
| [visible] | `boolean` | Shows or hides the indicator over the statusbar. |
| [style] | `string` | Sets the attribute "class" of the indicator. |
| [tooltip] | `string` | Sets the attribute "title" of the indicator. |
| [insertBefore] | `string` | An id of an existing status bar indicator. The new indicator will be inserted before (i.e. to the left of)          the indicator specified by this parameter. |

> For a detailed description, refer to [this link](https://docs.phcode.dev/api/API-Reference/widgets/StatusBar).