/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Config}
 */
export default {
  "**/*": ["eslint", "prettier --ignore-unknown --write"],
  "scripts/**/*": ["shellcheck"],
};
