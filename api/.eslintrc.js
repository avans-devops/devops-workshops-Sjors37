module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
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
  },
};
