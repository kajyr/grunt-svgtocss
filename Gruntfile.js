/*
 * grunt-xml-validator
 * https://github.com/panzic/grunt-xml-validator
 *
 * Copyright (c) 2014 Carlo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
 
    // Configuration to be run (and then tested).
    svgtocss: {
      test: {
        cwd: 'test/',
        src: ['svg1/*.svg', 'svg2/arrow-circle-right.svg'],
        dest: 'expected/',
        options: {
          base64: true,
          style: 'scss'
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['svgtocss']);

};
