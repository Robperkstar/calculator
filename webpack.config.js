const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/js/index.js", "./src/stylesheet.scss"],

  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
