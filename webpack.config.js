const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackPwaManifest = require("webpack-pwa-manifest")
const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },

  devServer: {
    contentBase: path.resolve("build"),
    compress: true,
    https: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: "graphql-tag/loader"
        }
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: {
          loader: "source-map-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "root",
      files: { manifest: "manifest.json" },
      inject: false,
      links: [
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      ],
      mobile: true,
      template: require("html-webpack-template"),
      title: "Prep Time"
    }),
    new WebpackPwaManifest({
      name: "Prep Time",
      short_name: "Prep",
      description: "Plan, shop, prep, cook, eat!",
      background_color: "#FF8A80",
      theme_color: "#FF5252",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
    })
  ]
}
