# eslint-config-innov8

## Breaking change from version 2
The language specific variants (vue, typescript) will no longer include the base config. You will need to add `@i8studios/eslint-config` to your `extends` array as well.

## Usage
1. Add to your `package.json`:
    ```json
    {
        "devDependencies": {
            "@i8studios/eslint-config": "3.x.x",
            "eslint": "8.x.x",
            "eslint-plugin-import": "2.x.x",
            "postcss": "8.x.x",
            "postcss-html": "1.x.x",
            "stylelint": "14.x.x"
        }
    }
    ```

    If you are using Vue.js, make sure to also include `eslint-plugin-vue`:
    ```json
    {
        "devDependencies": {
            "eslint-plugin-vue": "8.x.x",
        }
    }
    ```

    If you are using TypeScript, also include the necessary TypeScript plugins:
    ```json
    {
        "devDependencies": {
            "@typescript-eslint/eslint-plugin": "5.x.x",
            "@typescript-eslint/parser": "5.x.x",
            "typescript": "4.x.x"
        }
    }
    ```

2. Add to or create `.eslintrc.js`:
    ```js
    module.exports = {
        extends: [ '@i8studios/eslint-config' ],
    };
    ```

    If you are using Vue.js, make sure to add our Vue.js config:
    ```js
    module.exports = {
        extends: [ '@i8studios/eslint-config', '@i8studios/eslint-config/vue' ],
    };
    ```

    If you are using TypeScript, make sure to add our TypeScript config:
    ```js
    module.exports = {
        extends: [ '@i8studios/eslint-config', '@i8studios/eslint-config/typescript' ],
    };
    ```

3. Add to or create `.stylelintrc.js`:
    ```js
    module.exports = {
        extends: '@i8studios/eslint-config/stylelint',
    };
    ```

4. You can run `npm lint` manually but ideally follow instructions below on setting it up with your IDE.

## Visual Studio Code

Install the official [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and you're good to go!

For CSS linting, install the official [Stylelint Extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint). In the extension settings, make sure to set "Stylelint Path" to `node_modules/stylelint`, and add `vue` to the "Validate" array below.
