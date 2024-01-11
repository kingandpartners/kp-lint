/**
 * Export the "Vue.js" rules.
 *
 * @module module.exports
 */
module.exports = {
  extends: 'plugin:vue/recommended',
  rules : {
    'vue/no-v-html': 'off', // don't warn about using v-html
    'vue/custom-event-name-casing': ['error', 'kebab-case'], // enforce kebab-case for vue custom events
  },
};
