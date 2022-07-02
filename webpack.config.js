module.exports = {
  entry: ['./public/index.js'],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  mode: 'development',
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env"],
            ["@babel/preset-react"],
          ],
        },
      },
    ],
  },
};
