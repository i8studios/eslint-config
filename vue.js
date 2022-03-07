module.exports = {
    extends: [
        'plugin:vue/essential',
        'eslint-config-innov8',
    ],
    rules: {
        'vue/html-indent': [ 'error', 4 ],
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-components': 'warn',
    },
};
