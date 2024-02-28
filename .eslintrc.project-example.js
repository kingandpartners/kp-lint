/*
  Copy this file into your project root, and rename to `.eslintrc.js`
 */
const path = require('path');

// Check if the node environment is the production environment
// !!* Please update based on your environment variables in your root directory *!!
const isProd = process.env.NODE_ENV === 'production';

// Define the ESLint configuration
const eslintConfig = {
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
  }, // Give ESLint context for the Nuxt @ and ~ aliases that we use
  extends: [
    'kingandpartners',
  ],
};

// Export the ESLint configuration, or an empty object if in production
module.exports = isProd ? {} : eslintConfig;
