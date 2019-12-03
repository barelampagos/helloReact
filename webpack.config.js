module.exports = {
	entry: './public/app.jsx', // Entry point of application
	output: {
		// Output of bundled file
		path: __dirname, // Node: gives us current dir with __dirname
		filename: './public/bundle.js'
	},
	resolve: {
		// List of file extensions we should be able to process
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				// Initializes loader to parse babel
				loader: 'babel-loader',
				query: {
					// Take files to parse through react, then run through es2015
					presets: ['react', 'es2015']
				},
				// Regex to specify which files to get
				test: /\.jsx?$/,
				// Specify which folders to exclude
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};
