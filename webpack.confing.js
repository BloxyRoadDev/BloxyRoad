const productionConfig = merge([
  // parts.loadEnv('https://online-code-editor-api.herokuapp.com'),
  parts.extractCSS({
    use: "css-loader"
  }),
 
  ...
 
  parts.loadStatic()
]);
