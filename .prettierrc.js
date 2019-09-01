module.exports = {
  parser: 'babylon',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: '*.{css,scss,less,styl}',
      options: {
        parser: 'css',
        tabWidth: 2
      }
    },
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript'
      }
    }
  ]
};
