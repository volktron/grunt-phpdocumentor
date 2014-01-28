/*
 * grunt-phpdocumentor
 * https://github.com/gomoob/grunt-phpdocumentor
 *
 * Copyright (c) 2013 Baptiste Gaillard
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint : {
            all : [ 'Gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>', ],
            options : {
                jshintrc : '.jshintrc',
            },
        },

        // Before generating any new files, remove any previously-created files.
        clean : {
            tests : [ 'target' ],
        },

        // Configuration to be run (and then tested).
        phpdocumentor : {
            
            /**
             * Sample target used to call a PHPDocumentor command like 'phpdoc -d dir -t target'
             */
            directory_target : {

                options : {
                    directory : 'test/fixtures/directory_target',
                    target : 'tmp/directory_target'
                }

            },
            
            // Configuration used by the 'testWithDefaultOptions()' unit test method
            testWithDefaultOptions : {},
            
            // Configuration used by the 'testWithTarget()' unit test method
            testWithTarget : {
                options : {
                    target : 'target/testWithTarget'
                }
            }

        },

        // Unit tests.
        nodeunit : {
            tests : [ 'test/*_test.js' ],
        },

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this plugin's task(s), then test the result.
    grunt.registerTask('test', [ 'clean', 'nodeunit' ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', [ 'jshint', 'test' ]);

};
