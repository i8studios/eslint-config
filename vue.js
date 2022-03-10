module.exports = {
    extends: [
        'plugin:vue/essential',
        '@i8studios/eslint-config',
    ],
    rules: {
        'vue/html-indent': [ 'error', 4 ],
        'vue/max-len': [ 'error', { code: 120, ignoreHTMLTextContents: true, ignoreUrls: true } ],
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

