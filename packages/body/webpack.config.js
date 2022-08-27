const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",
  externals: ["navigation"],

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx", ".vue"],
  },

  devServer: {
    contentBase: outputPath,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-typescript"),
          ],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "body",
      library: { type: "var", name: "body" },
      filename: "remoteEntry.js",
      remotes: {
        "home-nav": "navigation",
      },
      exposes: {
        ApiContent: "./src/app",
      },
      shared: ["react", "react-dom", "single-spa-react"],
    }),
  ],
};
