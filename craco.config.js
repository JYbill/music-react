/**
 * @time 2022/10/30 18:33
 * @author xiaoqinvar
 * @desc craco 修改 webpack 配置
 * @dependence
 */
const {
  getLoader,
  getLoaders,
  removeLoaders,
  loaderByName,
  getPlugin,
  removePlugins,
  addPlugins,
  pluginByName,
  throwUnexpectedConfigError,
  addBeforeLoader,
  addAfterLoader,
} = require("@craco/craco");
const path = require("path");
const resolve = (dirname) => path.resolve(__dirname, dirname);
const swcConfig = require("./swcrc");
const webpack = require("webpack");

// 开启自定义插件
const needAnalysis = true;

module.exports = {
  devServer: {
    port: 3000,
  },
  webpack: {
    alias: {
      "@": resolve("src"),
      assets: resolve("src/assets"),
      components: resolve("src/components"),
    },
  },
  typescript: {
    enableTypeChecking: false,
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({
          webpackConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths },
        }) => {
          if (webpackConfig.mode === "development" && needAnalysis) {
            // 耗时插件
            let startTime = 0;
            const progressPlugin = new webpack.ProgressPlugin({
              handler(percentage, message, ...args) {
                // console.log(percentage, message, args);
                if (percentage === 1) {
                  const info = `complied spend time: ${+new Date() - startTime}ms`;
                  console.log(`\x1b[38;2;83;167;179m${info}\x1b[0m`);
                } else if (percentage <= 0.05) {
                  startTime = +new Date();
                }
              },
            });
            addPlugins(webpackConfig, [progressPlugin]);
          }

          // 使用SWC 代替 babel
          addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            exclude: /(node_modules)/,
            loader: require.resolve("swc-loader"),
            options: swcConfig,
          });
          // 移除babel
          removeLoaders(webpackConfig, loaderByName("babel-loader"));
          // 检测
          // const { isFound: babelExist } = getLoader(webpackConfig, loaderByName("babel-loader"));
          // const { isFound: swcExist } = getLoader(webpackConfig, loaderByName("swc-loader"));
          // console.log("babel exist", babelExist);
          // console.log("swc exist", swcExist);

          return webpackConfig;
        },
      },
    },
  ],
};
