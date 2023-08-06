const { join } = require('path');

module.exports = {
  mode: "production",
  entry: {
    contentPage: join(__dirname, "../src/scripts/content-scripts/main.tsx"),
    background: join(__dirname, "../src/scripts/background-scripts/background.ts"),
  },
  module: {
    rules: require("./webpack.rules"),
  },
  output: {
    filename: '[name].js',
    clean: true,
  },
  plugins: [...require("./webpack.plugins")],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      // Custom Aliases
      ...require("./webpack.aliases"),
    },
  },
  stats: "errors-warnings",
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: false,
    // runtimeChunk: "single",
    // splitChunks: {
    //   chunks: "all",
    //   maxInitialRequests: 10,
    //   minSize: 0,
    //   cacheGroups: {
    //     vendor: {
    //       name: "vendors",
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: "all",
    //     },
    //   },
    // },
  },
};
