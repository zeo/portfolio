module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/typescript',
    ],
    rules: {
        'indent': ['error', 4],
        'quotes': ['error', 'single', { allowTemplateLiterals: true }],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['warn', 120],
        'comma-dangle': ['error', 'always-multiline'],
    },
    env: {
        node: true,
    },
};