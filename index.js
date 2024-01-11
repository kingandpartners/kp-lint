module.exports = {
  extends: [
    './rules/best-practices',
    './rules/import',
    './rules/vue',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
