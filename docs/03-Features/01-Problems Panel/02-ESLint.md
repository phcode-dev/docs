# ESLint for Javascript Problems

Phoenix Code provides a comprehensive interface for identifying and resolving
`ESLint` issues in your `js`/`jsx` code.

`ESLint` is only available in desktop apps. In Browsers, `JSHint` is the default
linter for javascript files.

![image](https://github.com/phcode-dev/phoenix/assets/5336369/eb00691a-a0b4-4c1a-9209-d78fc7db764d)

### Basic Usage

To activate `ESLint`, the project must have a node `package.json` file with
ESLint as a dependency. Opening or editing+saving a `js` or `jsx` file will lint
the file with ESLint and .

#### Features

-   Errors and warnings are underlined directly in the editor.
-   Hovering over a highlighted line provides detailed information about the
    specific ESLint problem and a suggested fix if available.
-   Fix individual issues by clicking on the `Fix` button next to the specific
    problem, or you can resolve all fixable issues in the file by clicking on
    the `Fix All` button at the top of the panel.

### Advanced Use

Phoenix Code uses ESLint configured in the opened project directory. Any changes
to your ESLint configuration files will be automatically picked up. To learn
more about how to use and configure ESLint, see
[Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started).

## FAQ

#### Q: Which version of ESLint are supported

Phoenix Code supports **ESLint versions 7 and above** only.

#### Q: Why is ESLint not working in my project.

Most problems are usually reported in the problesm panel itself. These are the
most common errors:

1. Ensure that ESLint is listed in `dependencies` or `devDependencies` section
   in your `package.json` file. E.g.

```js
{
    "name": "My Project With ESLint",
    "version": "1.0.0",
    "description": "Sample package.json to activate ESLint",
    "main": "index.js",
    "scripts": {},
    "devDependencies": {
        "eslint": "^8.0.0"
    }
}
```

2. Ensure to run `npm install` on the project and `node_modules` folder is
   present in the project at the top level.
1. ESLint config files may have errors. Check if the problem message contains
   any references to your ESLint config file.
