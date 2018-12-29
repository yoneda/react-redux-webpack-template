
module.exports = {
  entry: "./src/index.js", // 出力元
  output:{
    path: `${__dirname}/dist`, // 出力先
    filename: "main.js",
    publicPath: '/',
  },
  mode: "development",
  /* mode: "production", */
  devServer:{
    contentBase: "./dist",
    port: "3000",
    historyApiFallback: true,
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader?modules"],
      },
      {
        test:/\.js/,
        exclude:/node_modules/,
        use:["babel-loader"]
      },
    ]
  },
};
