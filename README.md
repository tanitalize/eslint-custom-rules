# eslint-plugin-casings-custom-rules

This package provides custom ESLint rules to enforce naming conventions for filenames and AWS CDK Construct IDs.

## Installation

You can install the plugin via npm:

```sh
$ npm install eslint-plugin-casings-custom-rules --save-dev
```

## Usage
Add the plugin to your `.eslintrc` configuration file. You can then configure the rules you want to use under the rules section.

```json
{
  "plugins": ["casings-custom-rules"],
  "rules": {
    "casings-custom-rules/kebab-filename": "error",
    "casings-custom-rules/construct-id": "error"
  }
}
```

## Rules
### kebab-filename
Enforces that filenames are in kebab-case (e.g., `my-custom-file.js`). This rule is applicable to both JavaScript and TypeScript files.

### construct-id
Enforces that AWS CDK Construct IDs are in PascalCase (e.g., `MyCustomConstruct`).
