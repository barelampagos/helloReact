module.exports = {
	entry: './public/app.js', // Entry point of application
	output: {
		// Output of bundled file
		path: __dirname, // Node: gives us current dir with __dirname
		filename: './public/bundle.js'
	},
	resolve: {
		// List of file extensions we should be able to process
		extensions: ['', '.js', '.jsx']
	}
};
