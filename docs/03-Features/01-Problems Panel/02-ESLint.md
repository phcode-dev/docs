# ESLint

Phoenix Code provides a comprehensive interface for identifying and resolving
`ESLint` issues in your `js`/`jsx` code. `ESLint` is only available in desktop
apps.

In Browsers, `JSHint` is the default linter for javascript files.

![image](https://github.com/phcode-dev/phoenix/assets/5336369/89830ae8-cd45-47fe-9628-7edc4094db4e)

### Basic Usage

To activate `ESLint`, the project must have a node `package.json` file with ES
Opening or editing+saving a `js` or `jsx` file will lint the file with ESLint
and .

### Advanced Use Cases
TBD
## FAQ

#### Q: Which version of ESLint are supported

Phoenix Code supports **ESLint versions 7 and above** only.

#### Q: Why is ESLint not working in my project.

Most problems are usually reported in the problesm panel itself. These are the
most common errors:

1. Ensure to run `npm install` on the project and `node_modules` folder is
   present in the project at the top level.
1. ESLint config files may have errors. Check if the problem message contains
   any references to your ESLint config file.
