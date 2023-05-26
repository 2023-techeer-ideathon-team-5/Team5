module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-empty-function": "off",
    "no-useless-escape": "off",
  },
  ignorePatterns: [".eslintrc.js"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
