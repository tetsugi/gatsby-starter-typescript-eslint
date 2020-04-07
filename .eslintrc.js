module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "sort-imports-es6-autofix",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // General
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": ["error", "always"],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "sort-imports-es6-autofix/sort-imports-es6": [2, {
      "ignoreCase": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    "space-infix-ops": "error",
    // React
    "react/display-name": "off",
    "react/prop-types": "off",
    // TypeScript
    "@typescript-eslint/explicit-function-return-type": "off",
  },
}
