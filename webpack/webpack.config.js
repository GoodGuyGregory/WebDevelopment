var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	entry: "./src/index.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			}, {
				loader: ["style-loader", "css-loader", "sass-loader"],
				test: /\.scss$/

			}, {
				loader: ["url", "img"],
				test: /\.png$/

			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.ejs"
		})
	]
};

module.exports = webpackConfig;
