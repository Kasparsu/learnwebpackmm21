const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const glob = require('glob');

let htmlPlugins = [];

let files = glob.sync('./src/views/*.html');
files.forEach(file => {
  let htmlPlugin = new HtmlWebpackPlugin({
    filename: file.split('/').at(-1),
    template: file
  });
  htmlPlugins.push(htmlPlugin);
});




module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin()
  ],
};