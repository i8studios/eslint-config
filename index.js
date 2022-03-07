module.exports = {
    extends: [ 'eslint:recommended' ],
    plugins: [ 'import' ],
    rules: {
        // Always enforce spaces inside of array brackets.
        // Reason: Consistency with spaces between array elements.
        'array-bracket-spacing': [ 'error', 'always' ],

        // Always have a comma, even on the last element of a multiline array or object.
        // Reason: https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
        'comma-dangle': [ 'error', 'always-multiline' ],

        // Always have a newline at the end of each non-empty file.
        // Reason: Old UNIX standard that makes it easy to concatenate or append to files.
        'eol-last': [ 'error', 'always' ],

        // Always enforce import alphabetical order
        // Reason: Sanity when looking for an import.
        'import/order': 'error',

        // Always enforce 4 space indentation, and switch cases one level in.
        // Reason: Consistency, and using spaces lets us make sure that code looks the same across all editor configs.
        'indent': [ 'error', 4, { SwitchCase: 1 } ],

        // Always enforce one space after the colon after an object key.
        // Reason: Consistency, aesthetics.
        'key-spacing': 'error',

        // Always enforce a max line length of 120 characters.
        // Reason: Prevents extremely long lines that are hard to read and fit into a small screen / when two editors
        // are open side by side.
        'max-len': [ 'error', 120 ],

        // Warn when await is used in a loop.
        // Reason: This is likely a misunderstanding of how await works. You probably want to create an array of
        // promises and run all the tasks in parallel.
        'no-await-in-loop': 'warn',

        // Only allow console.warn and console.error.
        // Reason: Non critical logging should not make its way into production.
        'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],

        // Always error when duplicate keys are in an object definition.
        // Reason: This is always a coding error.
        'no-dupe-keys': 'error',

        // Always enforce parenthesis when operators are mixed in an expression.
        // Reason: `(a && b) || c || d` is much clearer than `a && b || c || d`
        'no-mixed-operators': 'error',

        // Error when there are multiple spaces in a row that are not indentation.
        // Reason: This is caused by sloppy typing, and there is never a need for multiple spaces.
        'no-multi-spaces': 'error',

        // Warn when variables are unused.
        // Reason: Helps you catch typos or other coding errors, but does not stop build.
        'no-unused-vars': 'warn',

        // Warn when `var` is used.
        // Reason: You should be using the more reasonably scoped `let` and `const`.
        'no-var': 'warn',

        // Enforce consistent newlines before/after the curly braces of object literals.
        // Reason: Consistency, aesthetics.
        'object-curly-newline': [ 'error', { consistent: true } ],

        // Do not enforce destructuring.
        // Reason: While nice, it's not always the cleanest approach.
        'prefer-destructuring': 'off',
        
        // Always enforce consistency when quoting props. Only quote when needed (such as when there are - characters in
        // the keys, such as in this file). And when one prop is quoted, quote all of them for consistency.
        // Reason: Consistency, aesthetics.
        'quote-props': [ 'error', 'consistent-as-needed' ],

        // Always enforce single quotes.
        // Reason: Consistency.
        'quotes': [ 'error', 'single' ],

        // Always enforce semicolons
        // Reason: Play it safe, don't rely on ASI. Stay consistent, because they are required in enough instances, it's
        // better if we use them always.
        'semi': [ 'error', 'always' ],

        // Always wrap an IIFE in parenthesis.
        // Reason: Clearer to see that this is a function that is being invoked immediately.
        'wrap-iife': 'error',
    },
};
