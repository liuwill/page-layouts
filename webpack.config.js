// webpack.config.js
const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const currentTime = (new Date()).toLocaleString()
module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // other options...
  module: {
    // `module.rules` 和 1.x 里的 `module.loaders` 相同
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // `vue-loader` 选项放这里
        options: {
          // ...
          compilerOptions: {
            preserveWhitespace: false
          }
          // postcss: []//require('postcss-cssnext')()
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader"
        ]
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: `Build: @${currentTime} [file]`
    }),
    new StyleLintPlugin({
      files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.template.html',
      inject: true,
      // favicon: 'src/images/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
}
