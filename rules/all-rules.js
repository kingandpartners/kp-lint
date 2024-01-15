/**
 * DELETEME : This file is only used to organize all of the current ESLint rules
 */
module.exports = {
  rules: {
    // --------------------------------------------------------------------
    // Possible Problems
    // - These rules relate to possible syntax or logic errors in JavaScript code
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
    Disallow use of async/await in loops
     */
    'no-await-in-loop': 'error',

    /*
    Disallow reassigning class members
     */
    'no-class-assign': 'error',

    /*
    Disallow comparing against -0
     */
    'no-compare-neg-zero': 'error',

    /*
    Disallow assignment in conditional expressions
     */
    'no-cond-assign': ['error', 'always'],

    /*
    Disallow reassignment of `const` variables
     */
    'no-const-assign': 'error',

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
    Warn against duplicate else if conditions
     */
    'no-dupe-else-if': 'warn',

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
    Disallow accidentally calling built-in JavaScript functions with the `new` keyword
     */
    'no-new-native-nonconstructor': 'error',

    /*
    Disallow accidentally calling built-in JavaScript objects as functions
     */
    'no-obj-calss': 'error',

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
    Disallow allow self comparison of properties
     */
    'no-self-compare': 'error',

    /*
    Disallow setters from returning values
     */
    'no-setter-return': 'error',

    /*
    Disallow arrays with missing values or extra spaces
     */
    'no-sparse-arrays': 'error',

    /*
    Disallow template literal placeholder syntax in regular strings
     */
    'no-template-curly-in-string': 'error',

    /*
    Disallow using this before super() in constructors
     */
    'no-this-before-super': 'error',

    /*
    Ignore undefined assignments
     */
    'no-undef-init': 0,

    /*
    Disallow confusing multiline expressions
     */
    'no-unexpected-multiline': 'error',

    /*
    Ignore unmodified loop conditions
     */
    'no-unmodified-loop-condition': 0,

    /*
    Disallow unreachable code after return, throw, continue, and break statements
     */
    'no-unreachable': 'error',

    /*
    Disallow loops with only one iteration
    - This is wasted resources and likely an oversight or missed proto-code/pseudocode
     */
    'no-unreachable-loop': 'error',

    /*
    Disallow control flow statements in finally blocks
     */
    'no-unsafe-finally': 'error',

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
    Ignore unused private class members
     */
    'no-unused-private-class-members': 0,

    /*
    Disallow unused variables
    - Allow unused function arguments only after the last used argument
    - Allow omitting properties from an object with rest property
     */
    'no-unused-vars': ['error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    /*
    Disallow the use of variables, functions, and classes before they are defined
    - Report error for functions used before their definition
    - Report error for classes used before their definition
    - Report error for variables used before their definition
     */
    'no-use-before-define': ['error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],

    /*
    Disallow useless backreferences in regular expressions
     */
    'no-useless-backreference': 'error',

    /*
    Ignore race condition concerns
     */
    'require-atomic-updates': 0,

    /*
    Disallow comparisons with the value NaN that are not using the isNaN() function
     */
    'use-isnan': 'error',

    /*
    Enforce valid typeof comparison assertions
    - Require that string literals are used in typeof comparisons
     */
    'valid-typeof': ['error',
      {
        requireStringLiterals: true,
      },
    ],

    // --------------------------------------------------------------------
    // Suggestions
    // - These rules relate to better ways of doing things to help you avoid problems
    // --------------------------------------------------------------------
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
    Ignore capitalized comments
    - Ignore all line comments regardless of the pattern
      - Ignore all inline line comments
      - Ignore consecutive line comments
    - Ignore all block comments regardless of the pattern
      - Ignore all inline block comments
      - Ignore consecutive block comments
     */
    'capitalized-comments': ['off', 'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
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
    Ignore consistent `this` usage
     */
    'consistent-this': 0,

    /*
    Enforce curly-braces for all multi-line control statements
     */
    'curly': ['error', 'multi-line'],


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
    Enforce dot notation whenever possible
    - Allow the use of square-bracket notation for keyword properties
     */
    'dot-notation': ['error',
      {
        allowKeywords: true,
      },
    ],

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
    Ignore function naming to match the name of the variable or property to which they are assigned
    - Exclude CommonJS module exports and consider property descriptors when assigning
     */
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    }],

    /*
    Warn about anonymous functions
     */
    'func-names': 'warn',

    /*
    Ignore function declarations or expressions style rules
     */
    'func-style': 0,

    /*
    Enforce getters and setters to appear in pairs within objects and classes
     */
    'grouped-accessor-pairs': 'error',

    /*
    Enforce for...in loops having an if statement
     */
    'guard-for-in': 'error',

    /*
    Ignore identifier naming convention enforcement
     */
    'id-denylist': 0,

    /*
    Ignore max/min identifier length enforcement
     */
    'id-length': 0,

    /*
    Ignore identifier naming based on a given regex pattern
     */
    'id-match': 0,

    /*
    Ignore enforcement of variable initialization at declaration
     */
    'init-declarations': 0,

    /*
    Allow logical assignment shorthand operators
     */
    'logical-assignment-operators': ['error', 'except-parens'],

    /*
    Enforce only a single Class per file
     */
    'max-classes-per-file': ['error', 1],

    /*
    Enforce a maximum depth of 4 nested blocks
     */
    'max-depth': ['error', 4],

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
    Ignore enforcement of multi-line comment styling
     */
    'multiline-comment-style': 0,

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
    Warn against using `alert()`
     */
    'no-alert': 'warn',

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
    Disallow use of lexical declarations (let, const, function and class) in case/default clauses
     */
    'no-case-declarations': 'error',

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
    Disallow the use of `delete` operator on variables
     */
    'no-delete-var': 'error',

    /*
    Ignore equal signs at the beginning of a regular expression
     */
    'no-div-regex': 0,

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
    Disallow empty statements
     */
    'no-empty': 'error',

    /*
    Disallow empty functions
     */
    'no-empty-function': 'error',

    /*
    Disallow empty static blocks
     */
    'no-empty-static-block': 'error',

    /*
    Ignore comparisons to `null`
     */
    'no-eq-null': 0,

    /*
    Disallow use of `eval()`
     */
    'no-eval': 'error',

    /*
    Disallow extending native types
     */
    'no-extend-native': 'error',

    /*
    Disallow unnecessary function binding
     */
    'no-extra-bind': 'error',

    /*
    Warn of unnecessary boolean casts
     */
    'no-extra-boolean-cast': 'warn',

    /*
    Disallow unnecessary labels
     */
    'no-extra-label': 'error',

    /*
    Disallow assignment to native objects or read-only global variables
     */
    'no-global-assign': 'error',

    /*
    Ignore implicit shorthand type coercion
     */
    'no-implicit-coercion': 0,

    /*
    Ignore implicitly storing variables and functions to the global scope
     */
    'no-implicit-globals': 0,

    /*
    Disallow implied `eval()`
     */
    'no-implied-eval': 'error',

    /*
    Ignore inline comments
     */
    'no-inline-comments': 0,

    /*
    Ignore potentially invalid `this` usage
     */
    'no-invalid-this': 0,

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
    Disallow functions that contain unsafe references inside loop statements
     */
    'no-loop-func': 'error',

    /*
    Ignore use of "magic numbers"; numbers that are used multiple times without explanation
     */
    'no-magic-numbers': 0,

    /*
    Disallow the use of multiple assignment expressions
     */
    'no-multi-assign': 'error',

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
    Warn against using `new` without assigning the result to a variable
     */
    'no-new': 'warn',

    /*
    Disallow using `new` to create functions
     */
    'no-new-func': 'error',

    /*
    Disallow using `new` to create primitive wrapper objects
     */
    'no-new-wrappers': 'error',

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
    Disallow reassigning function parameters; ignore for the following:
    - `acc` - for reduce accumulators
    - `accumulator` - for reduce accumulators
     */
    'no-param-reassign': ['error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
        ],
      },
    ],

    /*
    Ignore use of unary operators, ++ and --
     */
    'no-plusplus': 0,

    /*
    Disallow the use of `__proto__` property
     */
    'no-proto': 'error',

    /*
    Disallow re-declaring variables
     */
    'no-redeclare': 'error',

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
    Warn against assignment in return statements
     */
    'no-return-assign': ['warn', 'always'],

    /*
    Disallow sequence expressions
     */
    'no-sequences': 'error',

    /*
    Disallow shadow scope variables; variables that closely match the name of a variable in an outer scope
     */
    'no-shadow': 'error',

    /*
    Disallow shadowing of restricted names
     */
    'no-shadow-restricted-names': 'error',

    /*
    Ignore ternary operators
     */
    'no-ternary': 0,

    /*
    Disallow throwing literals as exceptions; should throw an `Error` object instead
     */
    'no-throw-literal': 'error',

    /*
    Ignore the use of `undefined` as an identifier
     */
    'no-undefined': 0,

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
    Disallow `var` declarations; use `let` or `const` instead
     */
    'no-var': 'error',

    /*
    Disallow `void` operators
     */
    'no-void': 'error',

    /*
    Ignore warning comments; these are useful for TODOs and other notes
     */
    'no-warning-comments': 0,

    /*
    Ignore object shorthand syntax
     */
    'object-shorthand': 0,

    /*
    Ignore number of variables allowed in a single declaration
     */
    'one-var': 0,

    /*
    Ignore assignment operators
     */
    'operator-assignment': 0,

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
    Warn about using `let` over `const` when the variable is never reassigned
     */
    'prefer-const': ['warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
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
    Ignore `Object.hasOwn()` over `Object.prototype.hasOwnProperty.call()`
     */
    'prefer-object-has-own': 0,

    /*
    Warn about using `Object.assign()` if the first argument is a literal and there are more than two arguments
     */
    'prefer-object-spread': 'warn',

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
    Ignore use of radix argument with `parseInt()`
     */
    'radix': 0,

    /*
    Ignore requirement of `await` in `async` functions
     */
    'require-await': 0,

    /*
    Ignore use of `u` or `v` flags in regular expressions
     */
    'require-unicode-regexp': 0,

    /*
    Warn about generator functions without `yield`
     */
    'require-yield': 'warn',

    /*
    Ignore alphabetical sorting of import declarations within module
     */
    'sort-imports': 'error',

    /*
    Ignore alphabetical sorting of keys in object literals
     */
    'sort-keys': 0,

    /*
    Ignore alphabetical sorting of variables within a single declaration
     */
    'sort-vars': 0,

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
    Warn about variables that are not declared at the top of their scope
     */
    'vars-on-top': 'warn',

    /*
    Disallow "Yoda" conditions
     */
    'yoda': 'error',

    // --------------------------------------------------------------------
    // Layout and Formatting
    // - These rules relate to how code looks, and often are matters of personal style
    // --------------------------------------------------------------------
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
