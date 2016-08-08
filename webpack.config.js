var path = require("path");
var webpack = require("webpack");

var isProduction = process.argv.indexOf("--prod") !== -1;
var plugins = [];
var entry;

if (isProduction) {
	plugins.push(new webpack.optimize.UglifyJsPlugin());
	entry = [
		"webpack-dev-server/client?http://localhost:7777",
		"webpack/hot/only-dev-server",
		"./src/index"
	];
} else {
	plugins.push(new webpack.HotModuleReplacementPlugin());
	entry = "./src/index";
}

module.exports = {
	devtool: "eval",
	entry: entry,
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/static/"
	},
	plugins: plugins,
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
		},
		{
			test: /\.svg$/,
			loader: "svg-inline",
			include: path.join(__dirname, "src")
		}]
	}
};
