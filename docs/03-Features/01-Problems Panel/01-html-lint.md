# HTML Validator

HTML Validator helps you find errors when you open or edit an HTML file. Eg.
duplicate IDs, unrecognized tags, Etc. The validator works on `HTML` and related
files like `XHTML`. `HTML` inside `PHP`, `JSP` and `ASP` files are also
supported.

![HTML validate](https://github.com/phcode-dev/phoenix/assets/5336369/5bc4a1cc-2429-477c-83ca-91f19dcc0b0f)

### Advanced Use Cases

HTML Validator is based on the powerful
[HTML-validate](https://html-validate.org/) library. You can customize the
behavior by using a `.htmlvalidate.json` configuration file. See
[this link](https://html-validate.org/usage/index.html#configuration) to
understand how to write custom config files and supported options.

#### Example `.htmlvalidate.json` config file for stricter HTML validation.

Create a new file with name `.htmlvalidate.json` in your project and add the
following text:

```json
{
    "extends": ["html-validate:recommended"]
}
```

[See more presets here](https://html-validate.org/rules/presets.html).

## FAQ

#### Q: Why is my custom HTML Validator custom config not working?

Phoenix Code only supports plain JSON configuration file
[.htmlvalidate.json](https://html-validate.org/usage/index.html#configuration).
Other config files like `.js`. `.htmlvalidate.js` and `.htmlvalidate.cjs` are
not supported.
