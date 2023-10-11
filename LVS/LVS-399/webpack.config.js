const path = require('path');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  watch: true,
  entry: {
    'v1': './src/v1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },

  // Optimizely validator workaround
  plugins: [
    new ReplaceInFileWebpackPlugin(
      [{
        dir: 'dist',
        test: /\.bundle.js$/,
        rules: [{
          search: /\.default(?=[^\w$])/g,
          replace: "['default']"
        }]
      }]
    ),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
  })
  ]
};