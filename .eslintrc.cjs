module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: require('jest/package.json').version,
    },
  },
  plugins: ['react', 'jest'],
  ignorePatterns: ['public/scripts/*.js'],
  rules: {
    'no-unused-vars': 'warn',
  },
};
