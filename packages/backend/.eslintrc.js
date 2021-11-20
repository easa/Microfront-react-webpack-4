module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['static/*', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './packages/backend/tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
  },
};
