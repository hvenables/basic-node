module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    },
  })

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};
