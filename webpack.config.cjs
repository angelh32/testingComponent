const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, '/src/app/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }, 
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "./" },
      ],
    }),
  ],
};