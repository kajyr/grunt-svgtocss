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

    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['svgtocss']);

};
