const path = require('path');

module.exports = {
  entry: {
    x3: [path.resolve(__dirname, 'src/index.ts')],
  },
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
    filename: 'x3.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'x3',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devServer: {
    allowedHosts: ['all'],
    static: [
      {
        directory: path.resolve(__dirname, 'css'),
        publicPath: '/css'
      },
      {
        directory: path.resolve(__dirname, 'examples'),
        publicPath: '/'
      },
      {
        directory: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
      }
    ],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};