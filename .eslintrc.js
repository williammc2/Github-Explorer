module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"

    ],
    "rules": {
      "prettier/prettier": "error"
    }
};
