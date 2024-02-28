/**
 * Export the "import" rules.
 * - These rules relate to ES6 imports.
 * - Many of these rules are from eslint-plugin-import.
 *
 * @module module.exports
 */
module.exports = {
  rules: {
    /*
    Ignore alphabetical sorting of import declarations within module
     */
    'sort-imports': 'error',

    /*
    "import/order"
    - Enforce a convention in module import order
      - Enforce alphabetized import order
      - Enforce internal imports after external imports (newlines between groups)
     */
    'import/order': ['error', {
      "groups": ["builtin", "external", "internal"],
      "pathGroups": [
        {
          "pattern": "@/**",
          "group": "internal"
        }
      ],
      "newlines-between": "always",
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true,
      },
    }],

    /*
    "import/extensions"
    - Allow importing without specifying extensions
    */
    'import/extensions': [
      'off',
      'always',
      {
        'js': 'never',
        'vue': 'never',
      }],
  },
};
