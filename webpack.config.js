module.exports = {
  entry: './test/localforage.spec.js',
  output: {
    filename: 'testbundle.js',
    path: require('path').resolve(__dirname, 'dist'),
  },
};
