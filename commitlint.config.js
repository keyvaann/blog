module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-length": [0, "always", Infinity],
    "body-max-line-length": [0, "always", Infinity],
  },
}
