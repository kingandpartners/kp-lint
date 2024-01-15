/**
 * Export the "Formatting" rules.
 * - These rules relate to style and formatting guidelines.
 *
 * @module module.exports
 */
module.exports = {
  rules: {
    /*
    Enforce the use of uppercase for constructors and lowercase for non-constructors
    - Require all new operators to be called with uppercase-started functions
    - Do not enforce that functions with uppercase start are called with 'new'
    - Exceptions for capIsNew: 'Immutable.Map', 'Immutable.Set', 'Immutable.List' (they can be called without 'new')
     */
    'new-cap': ['error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],

    /*
    Ignore enforcement of multi-line comment styling
     */
    'multiline-comment-style': 0,

    /*
    Allow logical assignment shorthand operators
     */
    'logical-assignment-operators': ['error', 'except-parens'],

    /*
    Ignore inline comments
     */
    'no-inline-comments': 0,

    /*
    Prefer arrow functions as callbacks
    - Allow named functions
    - Allow unbound `this` in callbacks
     */
    'prefer-arrow-callback': ['error',
      {
        'allowNamedFunctions': true,
        'allowUnboundThis': true,
      },
    ],

    /*
    Ignore destructuring from arrays and objects
     */
    'prefer-destructuring': 0,

    /*
    Ignore exponentiation operators
     */
    'prefer-exponentiation-operator': 0,

    /*
    Ignore named capture groups in regular expressions
     */
    'prefer-named-capture-group': 0,

    /*
    Ignore non-literal numeric values as operands in `parseInt()`
     */
    'prefer-numeric-literals': 0,

    /*
    Warn about using `Object.assign()` if the first argument is a literal and there are more than two arguments
     */
    'prefer-object-spread': 'warn',

    /*
    Disallow use of `RegExp` constructor in favor of regular expression literals
    - Check for unnecessary wrapping of regular expression characters
     */
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true,
    }],

    /*
    Warn to use rest operators instead of `arguments` object/arrays
     */
    'prefer-rest-params': 'warn',

    /*
    Disallow use of `Function.prototype.apply()` in favor of the spread operator
     */
    'prefer-spread': 'error',

    /*
    Warn to use template literals instead of string concatenation
     */
    'prefer-template': 'warn',

    /*
    Ignore alphabetical sorting of keys in object literals
     */
    'sort-keys': 0,

    /*
    Disallow "Yoda" conditions
     */
    'yoda': 'error',
  },
};
