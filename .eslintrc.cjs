/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'root': true,
  'parser': 'vue-eslint-parser',
  'extends': [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  'parserOptions': {
    'project': ['./tsconfig.json'],
  },
  'ignorePatterns': ['vite.config.ts', ],
  'rules': {
    'class-methods-use-this': 1,
    'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
    'no-continue': 0,
    'no-fallthrough': 0,
    'no-param-reassign': [1, { 'props': false }],
    // 'no-console': ['error', { 'allow': ['warn', 'error', 'info', 'table', 'time', 'timeStamp', 'timeEnd', 'timeLog', 'clear', 'group', 'groupCollapsed', 'groupEnd' ] }],
    'no-restricted-syntax': 1,
    'no-unused-vars': "warn",
    'vue/multi-word-component-names': 'off'
  },
  'settings': {
    'import/resolver': {
      'typescript': {},
    },
  },
  'env': {
    'vue/setup-compiler-macros': true,
  },
};
