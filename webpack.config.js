module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port: 8080,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: 'es2017' },
        }]
      }
    ]
  }
}
