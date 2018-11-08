var webpack = require("webpack");
var $ = require("jquery");
var jquery = require('jquery');

module.exports = {
	plugins: [
		new webpack.ProvidePlugin({
			jquery: "jquery",
			jQuery: "jquery",
			$: "jquery"
		})
	],

	resolve: {
		extensions: [".ts", ".js", ".css"],

		alias: {
			"$.bbq": __dirname + "/node_modules/jquery-bbq/jquery.ba-bbq.js"
		}
	},

	entry: {
		debugger: "./src/opt-live.ts"
	},

	output: {
		path: __dirname + "/build/",
		filename: "[name].bundle.js",
		sourceMapFilename: "[file].map"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" }, // CSS
			{ test: /\.(png|jpg)$/, loader: "url-loader" }, // images
			{ test: /\.ts$/, loader: "ts-loader" } // TypeScript
		]
	}
};
