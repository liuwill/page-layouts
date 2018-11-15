// webpack.config.js
const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const currentTime = (new Date()).toLocaleString()

const nodeEnv = process.env.NODE_ENV
const outputConfig = {
  "production": {
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[name].[hash].js',
  }
}
const miniCssConfig = {
  "production": {
    filename: 'assets/[name].[hash].css',
  }
}
const pluginConfig = {
  "development": [
    new FriendlyErrorsPlugin(),
  ],
  "production": [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin(Object.assign({
      filename: 'assets/[name].[hash].css',
      chunkFilename: 'assets/[id].css',
    }, miniCssConfig[nodeEnv] || {})),
  ],
}

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/main.js'],
  },
  output: Object.assign({
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[name].js',
  }, outputConfig[nodeEnv] || {}),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  mode: nodeEnv === 'production' ? 'production' : 'development',
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
  ].concat(pluginConfig[nodeEnv] || []),
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // publicPath: './',
    compress: true,
    hotOnly: true,
    open: true,
    port: 9000
  },
}
