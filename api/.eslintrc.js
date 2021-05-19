module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-param-reassign': 0,
    'no-console': 0,
    'comma-dangle': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 0
  },
};
