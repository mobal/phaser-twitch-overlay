const CopyWebpackPlugin =require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 8080
    },
    entry: './build/main.js',
    mode: 'development',
    module: {
      rules: [
        {
          exclude: '/node_modules/'
        }
      ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
      },
      resolve: {
      extensions: [ '.ts', '.js' ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
            { from: 'assets', to: 'assets' }
          ]
        })
    ]
};
