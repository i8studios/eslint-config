module.exports = {
    extends: [ 'stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss' ],
    ignoreFiles: [
      './dist/**/*',
      './node_modules/**/*',
    ],
    rules: {
        indentation: 4,
    },
};
