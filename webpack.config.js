const htmlWebPack = require('html-webpack-plugin');

const htmlWebPackConfig = new htmlWebPack({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [htmlWebPackConfig],
};
