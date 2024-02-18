module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["docs", ".eslintrc.cjs", "vite.config.ts", "*.d.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "no-useless-escape": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "arrow-body-style": "off",
    "consistent-return": "off",
    camelcase: "off",
    "no-underscore-dangle": "off"
  },
};
