/**
 * @type {import("lint-staged").Config}
 * @filename: lint-staged.config.js
 */
export default {
  "**/*": ["eslint", "prettier --ignore-unknown --write"],
  "scripts/**/*": ["shellcheck"],
};
