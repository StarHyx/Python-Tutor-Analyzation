const webpack = require("webpack");
const $ = require("jquery");
const jquery = require("jquery");
const path = require('path');

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
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		sourceMapFilename: "[file].map"
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader"] }, // CSS
			{ test: /\.(png|jpg)$/, use: "url-loader" }, // images
			{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ } // TypeScript
		]
	}
};
