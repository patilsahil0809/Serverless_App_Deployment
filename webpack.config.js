const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/handler.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'handler.js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

