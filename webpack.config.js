var path = require("path");
var webpack = require("webpack");

var isProduction = process.argv.indexOf("--prod") !== -1;
var plugins = [];
var jsLoaders = ["babel"];
var entry;

if (isProduction) {
	plugins.push(new webpack.optimize.UglifyJsPlugin());
	entry = "./src/index";
} else {
	plugins.push(new webpack.HotModuleReplacementPlugin());
	entry = [
		"webpack-dev-server/client?http://localhost:7777",
		"webpack/hot/only-dev-server",
		"./src/index"
	];
	jsLoaders.unshift("react-hot");
}

module.exports = {
	devtool: "eval",
	entry: entry,
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/dist/"
	},
	plugins: plugins,
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: jsLoaders,
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
		},
		{
			test: /\.svg$/,
			loader: "svg-inline",
			include: path.join(__dirname, "src")
		}]
	}
};
