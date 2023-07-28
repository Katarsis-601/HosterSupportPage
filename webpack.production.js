const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("webpack.config.js");
const { merge } = require("webpack-merge");
const path = require("path");
module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "src/js/[main].[contenthash].[bundle].js",
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "src/assets/[contenthash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[contenthash].[ext]",
    }),
  ],
};
