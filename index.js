module.exports = {
  'env': {
      'browser': true,
      'commonjs': true,
      'es6': true
  },
  'extends': [
      'eslint:recommended'
  ],
  'plugins': [
      'import',
      'react',
      'require',
      'standard'
  ],
  'rules': {
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'no-trailing-spaces': [2],
      'quotes': ['error', 'single'],
      'react/jsx-filename-extension': 0,
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/prop-types': 2,
      'react/require-default-props': 2,
      'semi': ['error', 'never'],
      'sort-keys': 2
  }
}
