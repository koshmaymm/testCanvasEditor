module.exports = {
    entry: './app.js',
    output: {
      filename: 'scripts/bundle.js'
    },
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }