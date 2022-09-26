const CopyWebpackPlugin = require("copy-webpack-plugin");
 
exports.loadStatic = () => ({
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./public/_redirects",
        to: "./_redirects",
        toType: "file"
      }
    ])
  ]
});
