const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // context : __dirname + '/app',      // 모듈들이 존재하는 기준 경로 (필수는 아님 없다면 매번 entry 에 풀경로를 적어줘야함)
  entry : './src/index',    // 엔트리 파일 위치.
  // output : {                       // output의 엔트리가 배열이면 차례대로 엔트리가 만들어짐
  //   path : __dirname + '/public', // 번들 파일의 대상 경로
  //   filename : 'bundle.js',        // 번들 파일의 이름
  //   mode: "development",

  //   entry: "./src/components/App",
  // },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          // presets: ['env']
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          // 얘는 background-image uri가 먹네.. 뭐지..ㅠㅠ
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              // camelCase: true,
              sourceMap: true,
              // localIdentName: '[local]'
            }
          }
        ],
        // 이걸로 하면 background-image uri가 안먹었는데
        // use: [
        //   MiniCssExtractPlugin.loader, 
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: true,
              
        //       // importLoaders: 1,
        //       // sourceMap: true,
        //       // esModule: true,
        //     },
        //   }
        // ],
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
        // write files under 10k to inline or copy files over 10k
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
    // mode: "development",
  },
  
  devServer: {
    contentBase: path.join(__dirname, "build"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
    compress: true,
    port: 8080,//각자의 portNumber 작성
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
      template: `./public/index.html`
    }),
    new MiniCssExtractPlugin({ filename: 'css/styles.css' }),
  ]
};