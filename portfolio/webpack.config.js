module.exports = {
  output: {
    filename: "index.js",
    pathinfo: false,
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false,
              icon: true,
            },
          },
        ],
      },
    ],
  },
}
