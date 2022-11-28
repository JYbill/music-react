module.exports = {
  useTabs: false, // tab键不使用tab，而是空格
  semi: true, // 句尾分号
  tabWidth: 2, // 缩进2个空格
  printWidth: 100,
  proseWrap: "preserve",
  singleQuote: false,
  trailingComma: "all", // 对象后面，每个属性后面加上","; "none": 不加

  // 插件
  plugins: ["@trivago/prettier-plugin-sort-imports"],

  // prettier-plugin-sort-imports 排序import内容
  importOrder: [
    // 默认情况下，首先会放置外部依赖项
    "^react(.*)$",
    "^axios$",

    // 内部依赖
    "^@/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
