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
  devtool: "cheap-module-source-map",
  stats: "errors-warnings",
};



// module.exports = {
//   mode: "development",
//   entry: ["./src/scripts/content-scripts/main.tsx"],
//   module: {
//     rules: require("./webpack.rules"),
//   },
//   output: {
//     filename: "[name].js",
//     chunkFilename: "[name].chunk.js",
//   },
//   plugins: require("./webpack.plugins"),
//   resolve: {
//     extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
//     alias: require("./webpack.aliases"),
//   },
//   stats: "errors-warnings",
//   devtool: "cheap-module-source-map",
//   devServer: {
//     open: true,
//   },
//   optimization: {
//     splitChunks: {
//       chunks: "all",
//     },
//   },
//   performance: {
//     hints: false,
//   },
// };
