// webpack.config.js
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  // ...other config
  plugins: [
    new CaseSensitivePathsPlugin(),
    // other plugins
  ],
};
