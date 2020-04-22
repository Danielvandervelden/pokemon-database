const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const JSLoader = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
}

const ESLintLoader = {
	test: /\.js$/,
	enforce: 'pre',
	exclude: /node_modules/,
	use: {
		loader: 'eslint-loader',
		options: {
			configFile: path.resolve(__dirname + '/.eslintrc')
		}
	}
}

const CSSLoader = {
	test: /\.scss$/,
	exclude: /node_modules/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				publicPath: path.resolve(__dirname, '../public/css/')
			}
		},
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				config: {
					path: __dirname + '/postcss.config.js'
				}
			},
		},
		{
			loader: 'sass-loader'
		}
	],
}

module.exports = {
	JSLoader,
	ESLintLoader,
	CSSLoader
}