// karma.conf.js

var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'test/**/*.spec.js'
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    browsers: ['Chrome'],

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
