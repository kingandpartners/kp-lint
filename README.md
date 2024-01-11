# ESLint Configuration and Rules

_~ King & Partners_

This is a custom configuration for ESLint, with custom rules to match the King & Partners best practices.
***

## A Living Project

This project is intended to be a living project. As out code style and standards evolve, so should this configuration to
match.
***

## Suggested Usage

There is a suggested `.eslintrc.js` file in the root directory of this module, named `.eslintrc.project-example.js`.
This includes configurations that are intended for use with Nuxt applications and the import aliases. There is also
additional logic for diabling ESLint in production environments.

To use it in your project either:

### Suggestion A _(Fresh ESLint Configuration)_

1. Move a copy of the file `.eslintrc.project-example.js` to your project root directory
2. Rename it to `.eslintrc.js`

### Suggestion B _(Fresh ESLint Configuration)_

1. Create your own `.eslintrc.js` file in your project root directory
2. Then copy the contents of the `.eslintrc.project-example.js` file
3. Paste in your `.eslintrc.js` file in your project root

### Suggestion C _(Existing ESLint Configuration)_

1. Copy the `path` variable to the top of your `.eslintrc.js`, if not already present
2. Copy the `import/resolver` settings object into the `settings` object in your `.eslintrc.js`
***

## Running ESLint Autofix
First copy the `.eslintignore.project-example` file to your project root directory and rename it to `.eslintignore`.
Then run the following command in your terminal:

```bash
npx eslint --fix --ext .js,.vue --ignore-path .eslintignore .
```

### ESLint Ignore
The `.eslintignore` file is used to ignore files and directories from being linted. This is useful for ignoring 3rd party or non-project files and directories.
Be sure to review and update the `.eslintignore` file as needed, depending on your project's structure.

## Peer Dependencies
The following are required peer-dependencies for this module to work properly:
- `eslint@^8.55.0`
- `eslint-import-resolver-webpack@^0.13.8`
- `eslint-plugin-import@^2.29.0`
- `eslint-plugin-vue@^9.18.1`

### Peer Dependency Installation
Using NPM
```bash
npm install --save-dev eslint@^8.55.0 eslint-import-resolver-webpack@^0.13.8 eslint-plugin-import@^2.29.0 eslint-plugin-vue@^9.18.1
```
Using Yarn
```bash
yarn add --dev eslint@^8.55.0 eslint-import-resolver-webpack@^0.13.8 eslint-plugin-import@^2.29.0 eslint-plugin-vue@^9.18.1
```
***
