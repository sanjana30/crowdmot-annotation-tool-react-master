const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

// const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./public/index.html", 
//   filename: "./index.html"
// });
module.exports = merge(common, {
	entry: 'src/apps/index.js',
	mode: 'production',
	devtool: 'source-map',
	// entry: {
	// 	index: 'apps/index.js',
	// 	 another: 'apps/another-module.js',
	// 	 index: { import: 'apps/index.js', dependOn: 'shared' },
	// 	 another: { import: 'apps/another-module.js', dependOn: 'shared' },
	// 	 shared: 'lodash',
	// 	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'bundle.js',
		libraryTarget: 'commonjs2',
	},
	plugins: [
		new CleanWebpackPlugin(['dist/*.*']),
		//[htmlPlugin]
	],
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
	},
});
