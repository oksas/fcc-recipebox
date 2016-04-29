var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:7777",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["react-hot", "babel"],
      include: path.join(__dirname, "src")
    },
    {
      test: /\.scss$/,
      loaders: [
        "style?sourceMap",
        "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
        "sass?sourceMap"
      ],
      include: path.join(__dirname, "src")
    }]
  }
};
