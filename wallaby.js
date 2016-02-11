module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.js',
      '!app/**/*.spec.js'
    ],

    tests: [
      'app/**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: 'NODE_ENV=test',
        runner: '--harmony'
      }
    },

    testFramework: 'mocha',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['es2015', 'stage-0']
      })
    },

    setup: function () {
      require("babel-polyfill");
    },

    debug: true
  };
};
