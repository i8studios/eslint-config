# eslint-config-innov8

## Usage
0. First of all, because we keep the package on Github, make sure you have SSH keys set up for Github if you haven't already. https://docs.github.com/en/authentication/connecting-to-github-with-ssh

1. Add to your `package.json`:
    ```json
    {
        "devDependencies": {
            "eslint": "8.10.0",
            "eslint-config-innov8": "git+ssh://git@github.com/i8studios/eslint-config-innov8",
            "eslint-plugin-import": "2.25.4",
            "postcss": "8.4.8",
            "postcss-html": "1.3.0",
            "stylelint": "14.5.3"
        }
    }
    ```

    If you are using Vue.js, make sure to also include `eslint-plugin-vue`:
    ```json
    {
        "devDependencies": {
            "eslint": "8.10.0",
            "eslint-config-innov8": "git+ssh://git@github.com/i8studios/eslint-config-innov8",
            "eslint-plugin-import": "2.25.4",
            "eslint-plugin-vue": "8.5.0",
            "postcss": "8.4.8",
            "postcss-html": "1.3.0",
            "stylelint": "14.5.3"
        }
    }
    ```

2. Add to or create `.eslintrc.js`:
    ```js
    module.exports = {
        extends: [ 'eslint-config-innov8' ],
    };
    ```

    If you are using Vue.js, make sure to use our Vue.js variant:
    ```js
    module.exports = {
        extends: [ 'eslint-config-innov8' ],
    };
    ```

3. Add to or create `.stylelintrc.js`:
    ```js
    module.exports = {
        extends: 'eslint-config-innov8/stylelint',
    };
    ```

4. You can run `npm lint` manually but ideally follow instructions below on setting it up with your IDE.

## Visual Studio Code

Install the official [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and you're good to go!

For CSS linting, install the official [Stylelint Extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint). In the extension settings, make sure to set "Stylelint Path" to `node_modules/stylelint`, and add `vue` to the "Validate" array below.
