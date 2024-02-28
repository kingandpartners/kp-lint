module.exports = {
  extends: [
    './rules/best-practices',
    './rules/import',
    './rules/vue',
    './rules/errors',
    './rules/formatting',
    './rules/declarations',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {},
};
