module.exports = {
    "parser": "babel-eslint",
    "env": {
        "node": 1,
        "es6": true
    },
    "extends": ["plugin:sonarjs/recommended","airbnb"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [],
    "rules": {
		"linebreak-style": ["error", "windows"],
		"no-unused-vars": "off"
    }
};