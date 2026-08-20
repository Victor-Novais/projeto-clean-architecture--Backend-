module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        useTabs: true,
        trailingComma: 'none',
        tabWidth: 4
      }
    ]
  }
}
