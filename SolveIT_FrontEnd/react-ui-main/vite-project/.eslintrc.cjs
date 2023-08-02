/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    'react'
  ],
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/no-unknown-property": [1, { ignore: <ignore/> }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
