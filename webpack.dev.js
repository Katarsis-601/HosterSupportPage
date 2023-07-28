const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "src/js/[name].js",
  },

  watch: true,
  devtool: false,
});
