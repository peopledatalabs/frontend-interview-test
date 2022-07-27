module.exports = {
  extends: [
    'next',
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    next: {
      rootDir: ['./*'],
    },
  },
  plugins: [
    'react',
    'unused-imports',
    'simple-import-sort',
  ],
  rules: {
    'object-curly-newline': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-danger': 'off',
    'import/extensions': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react/prop-types': 'off',
    'prefer-regex-literals': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'max-len': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'react/prefer-stateless-function': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/destructuring-assignment': 'off',
    camelcase: 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'import/order': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/named': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'react/no-unused-state': 'off',
    'react/sort-comp': 'off',
    'react/no-access-state-in-setstate': 'off',
    'class-methods-use-this': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/require-default-props': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `react` first, `next` second, then packages starting with a character
              ['^react$', '^next', '^[a-z]'],
              // Packages starting with `@`
              ['^@'],
              // Packages starting with `~`
              ['^~'],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
