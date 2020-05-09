module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': off,
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exaustive-deps': 'warn',
    'linebreak-style': [
      'error',
      process.env.NODE_ENV === 'prod' ? 'unix' : 'windows',
    ],
  },
  settings: {
    'impot/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
