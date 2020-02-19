const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry : './src/index',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: 'source-map',
  cache: true,
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
        },
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: true,
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }, 

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ]
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080,
  },

  plugins: [
    // new ImageminPlugin({
    //   // disable: process.env.NODE_ENV !== 'production', // Disable during development
    //   disable: false,
    //   pngquant: {
    //     quality: '95'// quality: '95-100'
    //   }
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: 'css/styles.css' }),
  ]
};
