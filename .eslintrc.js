module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ["import", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["airbnb-base"],
  rules: {
    "import/first": "error",
    "no-console": "warn",
    "no-use-before-define": "warn",
    "spaced-comment": "warn",
    "allowIndentationTabs" : true,
    "linebreak-style": 0,
    "prefer-destructuring": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "allowIndentationTabs" : true,
    "prefer-destructuring": 0,
    "import/prefer-default-export": 0,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};