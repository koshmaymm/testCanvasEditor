module.exports = {
    entry: './app.js',
    output: {
      filename: 'scripts/bundle.js'
    }
  }
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bowe_components)/,
        use: {
          loader: "babel-loader",
          options:{
            presents: ['env', 'stage-0']
          }
        }
      }
    ]
  }