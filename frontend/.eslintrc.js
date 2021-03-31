module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "linebreak-style": 0,
    "comma-dangle": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-undef": 0,
    "quotes": [0, "single"],
    "quote-props": 0,
    "object-shorthand": 0,
    "no-else-return": 0,
    "spaced-comment": 0,
    "func-names": 0,
    "global-require": 0,
  },
};
