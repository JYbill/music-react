module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // 解析器

  // 解析配置
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  // 环境：浏览器、node(构建工具/开发工具)、ECMAScript
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  // 插件
  plugins: ["@typescript-eslint", "react"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },

  rules: {
    "no-unused-vars": "off", // JS下未使用的变量
    "@typescript-eslint/no-unused-vars": "off", // TS未使用的变量
    "@typescript-eslint/no-var-requires": "off", // 存在ESM、CommonJS共存的情况下，可以开启，如：ts + react + webpack构建
    "prettier/prettier": "warn",
    "node/no-unpublished-import": "off", // 未使用的import内容
    "@typescript-eslint/no-explicit-any": "off",
  },
};
