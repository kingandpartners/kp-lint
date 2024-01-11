/**
 * Export the "Best Practices and Code Quality" rules.
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
  },
};
