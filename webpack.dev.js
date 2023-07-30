const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "src/js/[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[name].css",
    }),
  ],
  watch: true,
});
