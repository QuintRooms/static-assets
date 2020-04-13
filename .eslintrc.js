module.exports = {
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true,
    },
    plugins: ['prettier', 'more-naming-conventions'],
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
};
