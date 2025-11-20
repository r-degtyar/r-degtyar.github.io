/** @type {import('stylelint').Config} */
const config = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended",
    "stylelint-config-concentric-order",
  ],
  rules: {
    "selector-class-pattern": null,
  },
  ignoreFiles: ["node_modules/**/*.css", "build/**/*.css"],
};

export default config;
