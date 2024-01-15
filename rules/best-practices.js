/**
 * Export the "Best Practices and Code Quality" rules.
 * - These rules relate to better ways of doing things to help you avoid problems, that we have identified as a team.
 *
 * @module module.exports
 */
module.exports = {
  rules: {
    /*
    "no-undef"
    - Don't warn about undefined variables
     */
    'no-undef': 0,

    /*
    "no-negated-condition"
    - Don't warn about negated conditions
     */
    'no-negated-condition': 0,

    /*
    "no-else-return"
    - Allow else if statements
     */
    'no-else-return': [
      'error',
      {
        'allowElseIf': true
      }
    ],

    /*
    "prefer-arrow-callback"
    - Prefer arrow functions
      - Allow named functions
      - Allow unbound this in callbacks
     */
    'prefer-arrow-callback': [
      'error',
      {
        'allowNamedFunctions': true,
        'allowUnboundThis': true
      }
    ],


    // --------------------------------------------------------------------
    // The following are from all-rules
    // --------------------------------------------------------------------
    /*
    Custom array callback return rules
    - Allow implicitly returning undefined
     */
    'array-callback-return': ['error',
      {
        allowImplicit: true,
      },
    ],

    /*
    Disallow use of async/await in loops
     */
    'no-await-in-loop': 'error',

    /*
    Disallow accidentally calling built-in JavaScript functions with the `new` keyword
     */
    'no-new-native-nonconstructor': 'error',


    /*
    Disallow Promise executor functions from returning values
     */
    'no-promise-executor-return': 'error',

    /*
    Disallow callout object.prototype builtins
     */
    'no-prototype-builtins': 'error',

    /*
    Disallow allow self assignment of properties
     */
    'no-self-assign': ['error',
      {
        props: true,
      },
    ],

    /*
    Warn against duplicate else if conditions
     */
    'no-dupe-else-if': 'warn',

    /*
    Disallow allow self comparison of properties
     */
    'no-self-compare': 'error',

    /*
    Disallow arrays with missing values or extra spaces
     */
    'no-sparse-arrays': 'error',

    /*
    Disallow template literal placeholder syntax in regular strings
     */
    'no-template-curly-in-string': 'error',

    /*
    Disallow confusing multiline expressions
     */
    'no-unexpected-multiline': 'error',

    /*
    Disallow loops with only one iteration
    - This is wasted resources and likely an oversight or missed proto-code/pseudocode
     */
    'no-unreachable-loop': 'error',

    /*
    Disallow negating the left operand of relational operators
     */
    'no-unsafe-negation': 'error',

    /*
    Disallow use of optional chaining in contexts where the undefined value is not allowed
    - warn against optional chaining in arithmetic expressions
     */
    'no-unsafe-optional-chaining': ['error',
      {
        disallowArithmeticOperators: true,
      },
    ],

    /*
    Disallow comparisons with the value NaN that are not using the isNaN() function
     */
    'use-isnan': 'error',

    /*
    Enforce getter and setter pairs in objects
     */
    'accessor-pairs': 'error',

    /*
    Warn that curly-braces are not required for single-line arrow functions
     */
    'arrow-body-style': ['warn', 'as-needed'],

    /*
    Enforce use of variables within the scope they are defined
     */
    'block-scoped-var': 'error',

    /*
    Enforce camelcase naming convention
    - Do not enforce camelcase for property names
    - Do not allow exceptions for destructured identifiers
     */
    'camelcase': ['error',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],

    /*
    Enforce that class methods utilize `this`
    - No exceptions for specific methods
     */
    'class-methods-use-this': 'error',

    /*
    Enforce no more than 20 levels of cyclomatic complexity
     */
    'complexity': ['error', 20],

    /*
    Enforce return statements always specify values
     */
    'consistent-return': 'error',

    /*
    Enforce the use of === and !== over == and !=
    - Allow using == and != when comparing to null
     */
    'eqeqeq': ['error', 'always',
      {
        null: 'ignore',
      },
    ],

    /*
    Enforce for...in loops having an if statement
     */
    'guard-for-in': 'error',

    /*
    Enforce only a single Class per file
     */
    'max-classes-per-file': ['error', 1],

    /*
    Enforce a maximum depth of 4 nested blocks
     */
    'max-depth': ['error', 4],

    /*
    Enforce dot notation whenever possible
    - Allow the use of square-bracket notation for keyword properties
     */
    'dot-notation': ['error',
      {
        allowKeywords: true,
      },
    ],

    /*
    Ignore capitalized comments
    - Ignore all line comments regardless of the pattern
      - Ignore all inline line comments
      - Ignore consecutive line comments
    - Ignore all block comments regardless of the pattern
      - Ignore all inline block comments
      - Ignore consecutive block comments
     */
    'capitalized-comments': 0,

    /*
    Ignore consistent `this` usage
     */
    'consistent-this': 0,

    /*
    Warn about anonymous functions
     */
    'func-names': 'warn',

    /*
    Ignore function declarations or expressions style rules
     */
    'func-style': 0,

    /*
    Warn against files with too many lines
    - Max of 300 lines
    - Ignore blank lines
    - Ignore comments
     */
    'max-lines': ['warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    /*
    Warn against functions with too many lines
    - Max of 50 lines
    - Ignore blank lines
    - Ignore comments
    - Ignore immediately invoked function expressions
     */
    'max-lines-per-function': 0,

    /*
    Warn against using `alert()`
     */
    'no-alert': 'warn',

    /*
    Warn about using console
    - Allow console.error, console.warn, console.info, console.trace
     */
    'no-console': ['warn',
      {
        allow: ['error', 'warn', 'info', 'trace'],
      },
    ],

    /*
    Disallow use of continue statement, as it muddies code readability
     */
    'no-continue': 'error',

    /*
    Warn about using `else` after a `return` in an `if` statement, as the `else` is unnecessary
    - Allow `return` in `else if` statements
     */
    'no-else-return': ['warn',
      {
        allowElseIf: true,
      },
    ],

    /*
    Disallow empty functions
     */
    'no-empty-function': 'error',

    /*
    Disallow empty static blocks
     */
    'no-empty-static-block': 'error',

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
    Warn against functions with too many lines
    - Max of 50 lines
    - Ignore blank lines
    - Ignore comments
    - Ignore immediately invoked function expressions
     */
    'max-lines-per-function': ['off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    /*
    Ignore max depth of callbacks
     */
    'max-nested-callbacks': 0,

    /*
    Ignore max number of parameters
     */
    'max-params': 0,

    /*
    Ignore max number of statements in a function
     */
    'max-statements': 0,

    /*
    Disallow use of `eval()`
     */
    'no-eval': 'error',

    /*
    Disallow unnecessary labels
     */
    'no-extra-label': 'error',

    /*
    Disallow assignment to native objects or read-only global variables
     */
    'no-global-assign': 'error',

    /*
    Disallow implied `eval()`
     */
    'no-implied-eval': 'error',

    /*
    Disallow the use of `__iterator__` property
     */
    'no-iterator': 'error',

    /*
    Disallow creating labels that share a name with a variable
     */
    'no-label-var': 'error',

    /*
    Disallow labeled statements
     */
    'no-labels': 'error',

    /*
    Warn of unnecessary block statements; these serve no purpose in modern JavaScript
     */
    'no-lone-blocks': 'warn',

    /*
    Disallow lonely if statements inside else blocks
     */
    'no-lonely-if': 'error',

    /*
    Disallow the use of new lines in strings
     */
    'no-multi-str': 'error',

    /*
    Ignore negated condition expressions
     */
    'no-negated-condition': 0,

    /*
    Warn against nested ternary expressions; these are difficult to read and should be avoided, if possible
     */
    'no-nested-ternary': 'warn',

    /*
    Ignore comparisons to `null`
     */
    'no-eq-null': 0,

    /*
    Ignore use of unary operators, ++ and --
     */
    'no-plusplus': 0,

    /*
    Disallow the use of `__proto__` property
     */
    'no-proto': 'error',

    /*
    Warn against assignment in return statements
     */
    'no-return-assign': ['warn', 'always'],

    /*
    Disallow sequence expressions
     */
    'no-sequences': 'error',

    /*
    Ignore ternary operators
     */
    'no-ternary': 0,

    /*
    Ignore the use of `undefined` as an identifier
     */
    'no-undefined': 0,

    /*
    Disallow `void` operators
     */
    'no-void': 'error',

    /*
    Ignore warning comments; these are useful for TODOs and other notes
     */
    'no-warning-comments': 0,

    /*
    Ignore `Object.hasOwn()` over `Object.prototype.hasOwnProperty.call()`
     */
    'prefer-object-has-own': 0,

    /*
    Disallow `Promise.reject()` without an Error object
    - Allow empty `Promise.reject()` calls; where the error is thrown later or not important
     */
    'prefer-promise-reject-errors': ['error',
      {
        allowEmptyReject: true,
      },
    ],

    /*
    Ignore use of radix argument with `parseInt()`
     */
    'radix': 0,

    /*
    Ignore use of `u` or `v` flags in regular expressions
     */
    'require-unicode-regexp': 0,

    /*
    Enforce `strict` mode
    - 'safe' mode allows the use of global strict mode, without the need for a `'use strict'` directive
     */
    'strict': ['error', 'safe'],

    /*
    Ignore `Symbol` without description
     */
    'symbol-description': 0,

    /*
    Ignore line comment position
     */
    'line-comment-position': 0,

    /*
    Disallow Unicode byte order mark (BOM)
    - Never allow BOM
     */
    'unicode-bom': ['error', 'never'],
  },
};
