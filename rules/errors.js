/**
 * Export the "Errors" rules.
 * - These rules relate to possible syntax or logic errors in JavaScript code.
 *
 * @module module.exports
 */
module.exports = {
  rules: {
    /*
    Enforce constructor super() calls
     */
    'constructor-super': 'error',

    /*
    Enforce for loop conditions can be met
     */
    'for-direction': 'error',

    /*
    Enforce return statements in getters
     */
    'getter-return': ['error',
      {
        allowImplicit: true,
      },
    ],

    /*
    Disallow async Promise executor functions
     */
    'no-async-promise-executor': 'error',

    /*
    Disallow comparing against -0
     */
    'no-compare-neg-zero': 'error',

    /*
    Disallow assignment in conditional expressions
     */
    'no-cond-assign': ['error', 'always'],

    /*
    Disallow expressions where the operation doesn't affect the value
     */
    'no-constant-binary-expression': 'error',

    /*
    Warn against constant experssions in conditions
     */
    'no-constant-condition': 'warn',

    /*
    Disallow returning from a constructor
     */
    'no-constructor-return': 'error',

    /*
    Disallow control characters in regular expressions
     */
    'no-control-regex': 'error',

    /*
    Disallow use of debugger
    - There is no reason to leave debugger statements in production code
     */
    'no-debugger': 'error',

    /*
    Disallow duplicate arguments in functions
     */
    'no-dupe-args': 'error',

    /*
    Disallow uplicate class members
     */
    'no-dupe-class-members': 'error',

    /*
    Disallow duplicate keys in object literals
     */
    'no-dupe-keys': 'error',

    /*
    Disallow duplicate case labels
     */
    'no-duplicate-case': 'error',

    /*
    Disallow duplicate imports
     */
    'no-duplicate-imports': 'error',

    /*
    Disallow empty character classes in regular expressions
     */
    'no-empty-character-class': 'error',

    /*
    Disallow empty destructuring patterns
     */
    'no-empty-pattern': 'error',

    /*
    Disallow reassigning exceptions in catch clauses
     */
    'no-ex-assign': 'error',

    /*
    Disallow fallthrough of case statements
     */
    'no-fallthrough': 'error',

    /*
    Disallow function reassignment
     */
    'no-func-assign': 'error',

    /*
    Disallow assignment to import declarations
     */
    'no-import-assign': 'error',

    /*
    Disallow variable or function declarations in nested blocks
     */
    'no-inner-declarations': 'error',

    /*
    Disallow invalid regular expression strings in RegExp constructors
     */
    'no-invalid-regexp': 'error',

    /*
    Disallow irregular whitespace outside of strings and comments
     */
    'no-irregular-whitespace': 'error',

    /*
    Disallow numbers that lose precision
     */
    'no-loss-of-precision': 'error',

    /*
    Disallow characters which are made with multiple code points in character class syntax
     */
    'no-misleading-character-class': 'error',

    /*
    Disallow accidentally calling built-in JavaScript objects as functions
     */
    'no-obj-class': 'error',

    /*
    Disallow setters from returning values
     */
    'no-setter-return': 'error',

    /*
    Disallow using this before super() in constructors
     */
    'no-this-before-super': 'error',

    /*
    Disallow unreachable code after return, throw, continue, and break statements
     */
    'no-unreachable': 'error',

    /*
    Disallow control flow statements in finally blocks
     */
    'no-unsafe-finally': 'error',

    /*
    Disallow useless backreferences in regular expressions
     */
    'no-useless-backreference': 'error',

    /*
    Enforce valid typeof comparison assertions
    - Require that string literals are used in typeof comparisons
     */
    'valid-typeof': ['error',
      {
        requireStringLiterals: true,
      },
    ],

    /*
    Ignore unmodified loop conditions
     */
    'no-unmodified-loop-condition': 0,

    /*
    Ignore unused private class members
     */
    'no-unused-private-class-members': 0,

    /*
    Ignore race condition concerns
     */
    'require-atomic-updates': 0,

    /*
    Enforce a default case in switch statements
    - Report error if switch statements do not have a default case
    - Allow switch statements to explicitly omit a default case by including a comment with 'no default'
     */
    'default-case': ['error',
      {
        commentPattern: '^no default$',
      },
    ],

    /*
    Enforce default case in switch statements to be the last case
     */
    'default-case-last': 'error',

    /*
    Enforce default parameters to be last
     */
    'default-param-last': 'error',

    /*
    Enforce getters and setters to appear in pairs within objects and classes
     */
    'grouped-accessor-pairs': 'error',

    /*
    Enforce curly-braces for all multi-line control statements
     */
    'curly': ['error', 'multi-line'],

    /*
    Ignore function naming to match the name of the variable or property to which they are assigned
    - Exclude CommonJS module exports and consider property descriptors when assigning
     */
    'func-name-matching': 0,

    /*
    Disallow use of Array constructors
     */
    'no-array-constructor': 'error',

    /*
    Disallow use of bitwise operators
     */
    'no-bitwise': 'error',

    /*
    Disallow use of caller/callee
     */
    'no-caller': 'error',

    /*
    Disallow the use of `delete` operator on variables
     */
    'no-delete-var': 'error',

    /*
    Disallow empty statements
     */
    'no-empty': 'error',

    /*
    Ignore equal signs at the beginning of a regular expression
     */
    'no-div-regex': 0,

    /*
    Disallow extending native types
     */
    'no-extend-native': 'error',

    /*
    Disallow unnecessary function binding
     */
    'no-extra-bind': 'error',

    /*
    Disallow functions that contain unsafe references inside loop statements
     */
    'no-loop-func': 'error',

    /*
    Warn of unnecessary boolean casts
     */
    'no-extra-boolean-cast': 'warn',

    /*
    Ignore implicit shorthand type coercion
     */
    'no-implicit-coercion': 0,

    /*
    Ignore implicitly storing variables and functions to the global scope
     */
    'no-implicit-globals': 0,

    /*
    Ignore potentially invalid `this` usage
     */
    'no-invalid-this': 0,

    /*
    Disallow use of "non-octal" numeric literals inside of strings
     */
    'no-nonoctal-decimal-escape': 'error',

    /*
    Disallow call to Object constructor with empty arguments
     */
    'no-object-constructor': 'error',

    /*
    Disallow usage of "octal literals"
     */
    'no-octal': 'error',

    /*
    Disallow usage of "octal escape sequences" in strings
     */
    'no-octal-escape': 'error',

    /*
    Disallow multiple spaces in a regular expression literal; better to specify using ` {n}` expression
     */
    'no-regex-spaces': 'error',

    /*
    Ignore restricted exports
     */
    'no-restricted-exports': 0,

    /*
    Ignore restricted globals
     */
    'no-restricted-globals': 0,

    /*
    Ignore restricted imports
     */
    'no-restricted-imports': 0,

    /*
    Ignore restricted properties
     */
    'no-restricted-properties': 0,

    /*
    Ignore restricted syntax
     */
    'no-restricted-syntax': 0,

    /*
    Disallow shadow scope variables; variables that closely match the name of a variable in an outer scope
     */
    'no-shadow': 'error',

    /*
    Disallow shadowing of restricted names
     */
    'no-shadow-restricted-names': 'error',

    /*
    Disallow throwing literals as exceptions; should throw an `Error` object instead
     */
    'no-throw-literal': 'error',

    /*
    Disallow dangling underscores in identifiers
     */
    'no-underscore-dangle': 'error',

    /*
    Disallow unneeded ternary expressions
    -
     */
    'no-unneeded-ternary': 'error',

    /*
    Disallow unused expressions
     */
    'no-unused-expressions': 'error',

    /*
    Disallow unused labels
     */
    'no-unused-labels': 'error',

    /*
    Ignore useless method calls
     */
    'no-useless-call': 0,

    /*
    Ignore useless `catch` clauses
     */
    'no-useless-catch': 0,

    /*
    Disallow useless computed property keys
     */
    'no-useless-computed-key': 'error',

    /*
    Disallow useless string concatenation
     */
    'no-useless-concat': 'error',

    /*
    Warn about useless `constructor` methods
     */
    'no-useless-constructor': 'warn',

    /*
    Disallow useless escape characters
     */
    'no-useless-escape': 'error',

    /*
    Disallow useless renaming of `import`, `export`, and destructured assignments to the same name
     */
    'no-useless-rename': 'error',

    /*
    Disallow useless `return` statements
     */
    'no-useless-return': 'error',

    /*
    Ignore requirement of `await` in `async` functions
     */
    'require-await': 0,

    /*
    Warn about generator functions without `yield`
     */
    'require-yield': 'warn',
  },
};
