const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry : './src/index',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  mode: mode,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
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
          'file-loader',
            {
              
              loader: 'image-webpack-loader',
              options: {
                name: 'images/[name].[ext]',
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
              }
            // options: {
            //   name: 'images/[name].[ext]',
            // },
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
    new HtmlWebpackPlugin({
      template: `./public/index.html`
    }),
    new MiniCssExtractPlugin({ filename: 'css/styles.css' }),
  ]
};
