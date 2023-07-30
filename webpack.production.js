const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const path = require("path");
module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "src/js/main.[contenthash].bundle.js",
    chunkFilename: "[name].js",
    assetModuleFilename: "src/images/[hash].[ext]",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[contenthash].css",
      chunkFilename: "[name].css",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
});
