module.exports = {
    entry: './app.js',
    output: {
      filename: 'scripts/bundle.js'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }