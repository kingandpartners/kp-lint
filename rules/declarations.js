/**
 * Export the "Declaration" rules.
 * - These rules relate to variable and function declarations.
 *
 * @module module.exports
 */
module.exports = {
  rules: {
    /*
    Disallow reassigning class members
     */
    'no-class-assign': 'error',

    /*
    Disallow reassignment of `const` variables
     */
    'no-const-assign': 'error',

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
    Ignore undefined assignments
     */
    'no-undef-init': 0,

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
    Disallow use of lexical declarations (let, const, function and class) in case/default clauses
     */
    'no-case-declarations': 'error',

    /*
    Disallow the use of multiple assignment expressions
     */
    'no-multi-assign': 'error',

    /*
    Ignore use of "magic numbers"; numbers that are used multiple times without explanation
     */
    'no-magic-numbers': 0,

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
    Disallow re-declaring variables
     */
    'no-redeclare': 'error',

    /*
    Disallow `var` declarations; use `let` or `const` instead
     */
    'no-var': 'error',

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
    Warn about using `let` over `const` when the variable is never reassigned
     */
    'prefer-const': ['warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    /*
    Ignore alphabetical sorting of variables within a single declaration
     */
    'sort-vars': 0,

    /*
    Warn about variables that are not declared at the top of their scope
     */
    'vars-on-top': 'warn',
  },
};
