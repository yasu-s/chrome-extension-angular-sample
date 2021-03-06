module.exports = {
  entry: {
    content: './src/scripts/content.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/ng-sample'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.script.json'
        }
      }
    ]
  }
};
