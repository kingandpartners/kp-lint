/**
 * Export the "Vue.js" rules.
 *
 * @module module.exports
 */
module.exports = {
  extends: 'plugin:vue/recommended',
  rules: {
    // --------------------------------------------------------------------
    // *** Priority A: Essential (Error Prevention) ***
    // - These rules catch common errors in your code.
    // --------------------------------------------------------------------
    // Version Agnostic ---------------------------------------------------
    /*
    Don't enforce component naming word amounts
     */
    'vue/multi-word-component-names': 0,

    /*
    Ignore arrow functions in watchers
     */
    'vue/no-arrow-functions-in-watch': 0,

    /*
    Warn about async in computed properties
     */
    'vue/no-async-in-computed-properties': ['warn'],

    /*
    Disallow interpolated content that will overwrite directives
     */
    'vue/no-child-content': ['error'],

    /*
    Warn about using computed properties in data
     */
    'vue/no-computed-properties-in-data': ['warn'],

    /*
    Disallow duplicate keys in data
     */
    'vue/no-dupe-keys': ['error'],

    /*
    Warn about duplicate v-if/v-else-if in chain
     */
    'vue/no-dupe-v-else-if': ['warn'],

    /*
    Warn about duplicate attributes
     */
    'vue/no-duplicate-attributes': ['warn'],

    /*
    Disallow mutating props
     */
    'vue/no-mutating-props': ['error'],

    /*
    Warn of ref usage as operand
     */
    'vue/no-ref-as-operand': ['warn'],

    /*
    Disallow use of reserved Vue.js component names
     */
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true, // Vue.js 2.x
      disallowVue3BuiltInComponents: true, // Vue.js 3.x
    }],

    /*
    Disallow use of reserved keys
     */
    'vue/no-reserved-keys': ['error'],

    /*
    Disallow use of reserved props
     */
    'vue/no-reserved-props': ['error'],

    /*
    Warn about use of data as an object
     */
    'vue/no-shared-component-data': ['warn'],

    /*
    Warn about introducing "side effects" in computed properties
     */
    'vue/no-side-effects-in-computed-properties': ['warn'],

    /*
    Disallow interpolation in textarea HTML elements
     */
    'vue/no-textarea-mustache': ['error'],

    /*
    Warn of components imported, but not used in the template
     */
    'vue/no-unused-components': ['warn'],

    /*
    Warn of unused variables in v-for directives
     */
    'vue/no-unused-vars': ['warn'],

    /*
    Disallow use of computed property as a method
     */
    'vue/no-use-computed-property-like-method': ['error'],

    /*
    Disallow use of v-if on the same element as v-for
     */
    'vue/no-use-v-if-with-v-for': ['error'],

    /*
    Warn of superfluous attributes on template elements
     */
    'vue/no-useless-v-bind': ['warn'],

    /*
    Disallow the use of v-text/v-html on component elements
     */
    'vue/no-v-text-v-html-on-component': ['error'],

    /*
    Ignore skipping of component 'is' attribute
     */
    'vue/require-component-is': 0,

    /*
    Ignore required prop type constructor constraints
     */
    'vue/require-prop-type-constructor': 0,

    /*
    Disallow render function with no return value
     */
    'vue/require-render-return': ['error'],

    /*
    Require :key binding for v-for directives
     */
    'vue/require-v-for-key': ['error'],

    /*
    Warn of incorrect return values for prop default values
     */
    'vue/require-valid-default-prop': ['warn'],

    /*
    Enforce return value in computed properties
     */
    'vue/return-in-computed-property': ['error'],

    /*
    Enforce return value in emits
     */
    'vue/return-in-emits': ['error'],

    /*
    Warn that .exact modifier is needed for elements with multiple event listeners
     */
    'vue/use-v-on-exact': ['warn'],

    /*
    Enforce valid attribute names
     */
    'vue/valid-attribute-name': ['error'],

    /*
    Disallow invalid $nextTick usage
     */
    'vue/valid-next-tick': ['error'],

    /*
    Disallow invalid template root elements
     */
    'vue/valid-template-root': ['error'],

    /*
    Disallow invalid v-bind directives
     */
    'vue/valid-v-bind': ['error'],

    /*
    Disallow invalid v-cloak directives
     */
    'vue/valid-v-cloak': ['error'],

    /*
    Disallow invalid v-else-if directives
     */
    'vue/valid-v-else-if': ['error'],

    /*
    Disallow invalid v-else directives
     */
    'vue/valid-v-else': ['error'],

    /*
    Disallow invalid v-for directives
     */
    'vue/valid-v-for': ['error'],

    /*
    Disallow invalid v-html directives
     */
    'vue/valid-v-html': ['error'],

    /*
    Disallow invalid v-if directives
     */
    'vue/valid-v-if': ['error'],

    /*
    Disallow invalid v-model directives
     */
    'vue/valid-v-model': ['error'],

    /*
    Disallow invalid v-on directives
     */
    'vue/valid-v-on': ['error'],

    /*
    Disallow invalid v-once directives
     */
    'vue/valid-v-once': ['error'],

    /*
    Disallow invalid v-pre directives
     */
    'vue/valid-v-pre': ['error'],

    /*
    Disallow invalid v-show directives
     */
    'vue/valid-v-show': ['error'],

    /*
    Disallow invalid v-slot directives
     */
    'vue/valid-v-slot': ['error'],

    /*
    Disallow invalid v-text directives
     */
    'vue/valid-v-text': ['error'],

    // Vue.js 2.x ---------------------------------------------------------
    /*
    Warn about using custom modifiers on v-model
     */
    'vue/no-custom-modifiers-on-v-model': ['warn'],

    /*
    Disallow using multiple root nodes in templates
     */
    'vue/no-multiple-template-root': ['error'],

    /*
    Disallow using `key` attributes on template elements
     */
    'vue/no-template-key': ['error'],

    /*
    Warn about using arguments in v-model
     */
    'vue/no-v-model-argument': ['warn'],

    /*
    Disallow invalid model definition
     */
    'vue/valid-model-definition': ['error'],

    // Vue.js 3.x ---------------------------------------------------------
    // TODO : Once we adopt Vue.js 3.x, build out these rules and remove the Vue.js 2.x rules

    // --------------------------------------------------------------------
    // *** Priority B: Strongly Recommended (Improving Readability) ***
    // - These rules enforce good practices.
    // --------------------------------------------------------------------
    /*
    Warn about not using kebab-case attribute names
     */
    'vue/attribute-hyphenation': ['warn', 'always'],

    /*
    Enforce component name casing
    - Enforce PascalCase for components
     */
    'vue/component-definition-name-casing': ['error', 'PascalCase'],

    /*
    Warn about multiline attributes with incorrect spacing
     */
    'vue/first-attribute-linebreak': ['warn', {
      'singleline': 'ignore',
      'multiline': 'below',
    }],

    /*
    Warn about closing bracket placement on elements with multiline attributes
    - For both self-closing and non-self-closing elements
     */
    'vue/html-closing-bracket-newline': ['warn', {
      'singleline': 'never',
      'multiline': 'always',
      'selfClosing': {
        'singleline': 'never',
        'multiline': 'always',
      },
    }],

    /*
    Warn about spacing of HTML closing brackets
     */
    'vue/html-closing-bracket-spacing': ['warn', {
      'startTag': 'always',
      'endTag': 'always',
      'selfClosingTag': 'always',
    }],

    /*
    Disallow elements that lack a closing tag
     */
    'vue/html-end-tags': ['error'],

    /*
    Enforce double quote for HTML attributes
     */
    'vue/html-quotes': ['error', 'double'],

    /*
    Ignore elements to close themselves or be self-closing
     */
    'vue/html-self-closing': 0,

    /*
    Disallow multiple attributes on a single line
    - Only allow one attribute per line in single-line elements (ex: `<div class="container"></div>`)
    - Allow only one attribute per line in multi-line elements
     */
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],

    /*
    Enforce a line break before and after the contents of a multiline element
     */
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false,
    }],

    /*
    Enforce spacing in mustache interpolations
     */
    'vue/mustache-interpolation-spacing': ['error', 'always'],

    /*
    Disallow multiple spaces are present in between attributes
     */
    'vue/no-multi-spaces': ['error'],

    /*
    Disallow space around equal signs in attributes
     */
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],

    /*
    Disallow shadowed variable declarations
     */
    'vue/no-template-shadow': ['error'],

    /*
    Disallow more than one component declaration per file
     */
    'vue/one-component-per-file': ['error'],

    /*
    Warn about camelCase props declarations in component
     */
    'vue/prop-name-casing': ['warn', 'camelCase'],

    /*
    Enforce props always have default if not required
     */
    'vue/require-default-prop': ['error'],

    /*
    Enforce props always have their type defined
     */
    'vue/require-explicit-emits': ['error'],

    /*
    Ignore line breaks before and after HTML element contents
     */
    'vue/singleline-html-element-content-newline': 0,

    /*
    Enforce shorthand syntax for v-bind
     */
    'vue/v-bind-style': ['error', 'shorthand'],

    /*
    Enforce shorthand syntax for v-on
     */
    'vue/v-on-style': ['error', 'shorthand'],

    /*
    Enforce explicit, `v-slot`, syntax for v-slot
     */
    'vue/v-slot-style': ['error', {
      'default': 'v-slot',
      'named': 'v-slot',
    }],

    // --------------------------------------------------------------------
    // *** Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead) ***
    // - These rules enforce conventions.
    // --------------------------------------------------------------------
    /*
    Ignore the order of attributes
    - There is still some discussion about this rule, so we're ignoring it for now
    - TODO : Revisit this rule as a team and define precisely what we want
     */
    'vue/attributes-order': 0,

    /*
    Warn about lone or superfluous template elements
     */
    'vue/no-lone-template': ['warn'],

    /*
    Disallow multiple arguments for scoped slots
     */
    'vue/no-multiple-slot-args': ['error'],

    /*
    Allow use of `v-html` to render HTML
     */
    'vue/no-v-html': 0,

    /*
    Enforce order of properties in components
     */
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    }],

    /*
    Disallow use of `this` keyword in templates
     */
    'vue/this-in-template': ['error', 'never'],

    // --------------------------------------------------------------------
    // *** Uncategorized ***
    // - These rules do not fit in the above categories.
    // --------------------------------------------------------------------
    /*
    Enforce kebab-case for custom events
     */
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
  },
};
