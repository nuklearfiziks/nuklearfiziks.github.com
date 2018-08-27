module.exports = {
  extends: 'airbnb',
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': [0],
  },
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
