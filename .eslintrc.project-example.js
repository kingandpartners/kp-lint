/*
  Copy this file into your project root, and rename to `.eslintrc.js`
 */
const path = require('path');

// check if the node environment is the production environment,
// !!* please update based on your environment variables in your root directory *!!
const isProd = process.env.NODE_ENV === 'production';
if (isProd) return;

module.exports = isProd ? {} : {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname, 'src'),
              '~': path.resolve(__dirname, 'src')
            },
            extensions: ['.js', '.vue']
          }
        }
      }
    },
  }, // give ESLint context for the Nuxt @ and ~ aliases that we use
  extends: [
    'kingandpartners',
  ],
}; // if not isProd, export the ESLint configuration
