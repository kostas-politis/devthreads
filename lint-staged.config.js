/**
 * @type {import("lint-staged").Configuration}
 * @filename: lint-staged.config.js
 *
 * Each monorepo package should extend this base config
 */
export const baseConfig = {
  "**/*": ["eslint", "prettier --ignore-unknown --write"],
};

/**
 * @type {import("lint-staged").Configuration}
 * @filename: lint-staged.config.js
 *
 * This config applies only to the root of the monorepo.
 */
export default {
  "**/*": ["prettier --ignore-unknown --write"],
  "scripts/**/*": ["shellcheck"],
  ".husky/**": ["shellcheck"],
};
