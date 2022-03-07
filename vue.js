module.exports = {
    extends: [
        'plugin:vue/essential',
        'eslint-config-innov8',
    ],
    rules: {
        'vue/html-indent': [ 'error', 4 ],
        'vue/max-len': [ 'error', { code: 120, ignoreHTMLTextContents: true } ],
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-components': 'warn',
    },
    overrides: [
        {
            files: [ '*.vue' ],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};

