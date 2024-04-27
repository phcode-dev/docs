# Editor Rulers

Add vertical column rulers to the editor to keep track of line lengths. By
default, a single ruler is set at the 120-character position.

### Enabling and Disabling Rulers

Toggle the visibility of rulers through the `View > Rulers` menu option.

![Screenshot from 2024-04-27 12-42-50](https://github.com/phcode-dev/phoenix/assets/5336369/bb68fafa-395c-4da6-8aa2-a617918286ce)

## Adding Multiple Rulers

To add multiple rulers, edit the preferences file:

1. Navigate to `File > Open Preferences File`.
1. Add the following entries to the JSON configuration:

```js
{
    // existing json items
    "editor.rulers": [40, 80],
    "editor.rulerColors": ["green", "#f34d5a"],
}
```

These settings introduce two rulers at the 40th and 80th character positions,
colored green and red respectively.

![image](https://github.com/phcode-dev/phoenix/assets/5336369/71b8b04c-d2ca-47b8-84bb-53cd0fb4593c)

#### Configuration Options

1. `editor.rulers` : Specifies an array of column numbers where vertical rulers
   will appear.
1. `editor.rulerColors` : An optional array to set colors for each ruler,
   corresponding to the positions listed in `editor.rulers`.

## FAQ

#### Q: How do I add different rulers for each project?

To set up different rulers for individual projects, create a `.phcode.json` file
in the root directory of each project. Include the same ruler configurations as
shown in the example above.
