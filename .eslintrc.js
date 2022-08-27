module.exports = {
  extends: ["react-app", "eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["babel"],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
      },
    ],
  },
};
