const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();

module.exports = {
  mode: 'development',
  entry: {
    home: ['@babel/polyfill', './src/js/index.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Большой театр',
      favicon: path.resolve(__dirname, 'src/assets/img/favicon.png'),
      filename: 'home.html',
      template: './src/index.html',
      minify: true,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

    ],
  },
};
