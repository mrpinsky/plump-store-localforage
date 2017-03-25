module.exports = {
  entry: './test/localforage.spec.ts',
  output: {
    filename: 'testbundle.js',
    path: require('path').resolve(__dirname, 'dist'),
  },
  resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
          // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
          { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
};
