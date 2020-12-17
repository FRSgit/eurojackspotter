module.exports = {
  configureWebpack: {
    entry: ['@babel/polyfill', './src/main.ts'],
  },
  devServer: {
    proxy: {
      "^/graphql": {
        target: "https://www.lottohelden.de",
      }
    }
  },
  transpileDependencies: [
    "vuetify"
  ]
}
