import dotenv from "dotenv";
dotenv.config();
import path from "path";
import * as url from "url";
import multipleHtmlPlugins from "./src/client/module/webpack/htmlPages.js";
import multipleJsPlugins from "./src/client/module/webpack/jsPages.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import webpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import CopyPlugin from "copy-webpack-plugin";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const MODE = process.env.MODE === "development";

const CONFIG = {
  mode: process.env.MODE, // development | production
  devtool: MODE ? "source-map" : false,
  watch: true,
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  entry: multipleJsPlugins,
  output: {
    path: path.join(__dirname, "dist"),
    filename: MODE ? "js/[name].bundle.js" : "js/[name].[contenthash].bundle.js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: true,
              esModule: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
              outputPath: "assets/font/",
              publicPath: "/assets/font/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: MODE ? "css/[name].bundle.css" : "css/[name].[contenthash].bundle.css",
    }),
  ].concat(multipleHtmlPlugins),
};

/**
 * node express server 연동을 위한 client server 비동기처리
 */
const compiler = webpack(CONFIG);
const server = new webpackDevServer(
  {
    static: {
      directory: path.join(__dirname, "dist"), // dist | src
    },
    compress: true,
    port: 3000,
    hot: true,
    client: {
      progress: true,
    },
    proxy: {
      context: () => true,
      target: "http://localhost:5000",
    },
  },
  compiler
);

// bundling end event
compiler.hooks.done.tap("BundlingCompletePlugin", () => {
  console.log("Bundling process is complete!");
  // Perform additional actions here
});

(async () => {
  await server.start();
  console.log("dev server is running");
})();

export default CONFIG;
