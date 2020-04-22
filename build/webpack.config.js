const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
	entry: {
		script: path.resolve(__dirname, "./source/js/main.js"),
		style: path.resolve(__dirname, "./source/scss/main.scss"),
	},
	module: {
		rules: [
			loaders.JSLoader,
			loaders.CSSLoader
		]
	},
	plugins: [
		plugins.MiniCssExtractPlugin
	],
	output: {
		path: path.resolve(__dirname, "../public"),
		filename: "js/[name].js"
	}
}