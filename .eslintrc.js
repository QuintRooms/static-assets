module.exports = {
    env: {
        browser: true,
        es6: true,
        jquery: true,
        'jest/globals': true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier', 'more-naming-conventions', 'jest'],
    rules: {
        'prettier/prettier': ['error'],
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    parser: 'babel-eslint',
    rules: {
        'more-naming-conventions/snake-case-variables': 'error',
        'no-unused-vars': [
            'error',
            {
                vars: 'local',
                args: 'none',
            },
        ],
        camelcase: 'off',
        'guard-for-in': 'off',
        'class-methods-use-this': 'off', // remove this and fix 'this' errors
        'consistent-return': 'off',
        'no-use-before-define': 'warn',
        'no-restricted-syntax': 'off',
        'no-new': 'off',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
    },
    globals: {
        L: 'readonly',
        ArnMapDispatcher: 'readonly',
        places: 'readonly',
    },
    ignorePatterns: ['ares/node_modules/*', 'ares/dist/*', 'portals/dist/*', 'portals/dist/*', 'node_modules/*'],
};
