module.exports = {
	entry: './front-end/index.js',
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
}