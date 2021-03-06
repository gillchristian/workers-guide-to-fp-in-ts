module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        commonjs: true,
        node: true,
        jest: true,
        es6: true,
    },
    plugins: ['prettier', '@typescript-eslint', 'react'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    settings: {react: {version: 'detect'}},
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            ecmaVersion: 8,
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
        useJSXTextNode: false,
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: '.',
        warnOnUnsupportedTypeScriptVersion: false,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-const-assign': 'warn',
        'no-this-before-super': 'warn',
        'no-undef': 'error',
        'no-unreachable': 'error',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        'no-debugger': 'off',
        'no-console': 'warn',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/prefer-interface': 'off',
    },
};
