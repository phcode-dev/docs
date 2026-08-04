---
title: Doc Comments
slug: "/Features/doc-comments"
---

**Phoenix Code** can write documentation comments for your functions and classes. Type `/**` on the line above a function and accept the hint that appears. Phoenix Code reads the function's signature and generates a comment with all its parameters filled in.

<!-- TODO: PLUTO - add video here showing a JSDoc comment being generated -->

## Generating a Doc Comment

1. Place your cursor on an empty line right above a function or class.
2. Type `/**`. A code hint appears, for example **Add JSDoc comment**.
3. Press `Enter` or `Tab` to accept it.

The comment expands with a description placeholder, one `@param` tag for each parameter, and an `@returns` tag if the function returns something.

The description is selected first, so you can start typing right away. Press `Tab` to jump to the next field, like a parameter type.

## Supported Languages

Each language gets a comment in its own convention:

| Language | Comment style |
| ---------- | --------------- |
| JavaScript, JSX | JSDoc, with `@param {type} name` tags |
| TypeScript, TSX | JSDoc without `{type}` braces, since the types already live in the code |
| PHP | PHPDoc, with `@param type $name` tags |
| Java | Javadoc |
| C, C++ | Doxygen |
| Python | Docstring with `Args:` and `Returns:` sections |

> In Python, type `"""` on the first line inside a `def` or `class` instead, since docstrings sit below the definition.

## What Gets Filled In

The generated comment is built from the actual signature, not a generic template:

- Every parameter gets its own tag. Optional parameters are shown as `[name]`.
- In JavaScript, parameter and return types are taken from the signature when declared, and default to `*` otherwise.
- `@returns` is skipped for constructors and functions that return nothing.
- In Python, `self` and `cls` are skipped, and the `Returns:` section is added only when the function has a return type annotation.
