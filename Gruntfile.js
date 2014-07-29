module.exports = function(grunt) {

    "use strict";

    var fs = require('fs'), pkginfo = grunt.file.readJSON("package.json");

    grunt.initConfig({

        pkg: pkginfo,

        meta: {
          banner: "/*! <%= pkg.title %> <%= pkg.version %> | <%= pkg.homepage %> */"
        },

        jshint: {
            src: {
                options: {
                    jshintrc: "js/.jshintrc"
                },
                src: ["js/src/*.js, 'js/main.js"]
            }
        },

        less: {
          production: {
            compress: true,
            cleancss: true,
            files: {
              'css/adventurous.css' : 'less/adventurous.less',
              'css/adventurous.min.css' : 'less/adventurous.less'
            }
          }
        },

        cssmin: {
          minify: {
            expand: true,
            cwd: 'css/',
            src: ['adventurous.min.css'],
            dest: 'css/'
          }
        },

        concat: {
            dist: {
                options: {
                    separator: "\n\n"
                },
                src: ["js/src/core.js",
                      "js/src/utility.js",
                      "js/src/touch.js",
                      "js/src/alert.js",
                      "js/src/button.js",
                      "js/src/dropdown.js",
                      "js/src/grid.js",
                      "js/src/modal.js",
                      "js/src/offcanvas.js",
                      "js/src/nav.js",
                      "js/src/tooltip.js",
                      "js/src/switcher.js",
                      "js/src/tab.js",
                      "js/src/search.js",
                      "js/src/scrollspy.js",
                      "js/src/smooth-scroll.js",
                      "js/src/toggle.js",
                      ],
                dest: "js/uikit.js"
            },
            avgrund: {
              options: {
                mangle: false
              },
              src: ["js/src/avgrund.js",
                    "js/adventurous.js"],
              dest: "js/adventurous_libs.js"
            }
        },

        usebanner: {
            dist: {
              options: {
                position: 'top',
                banner: "<%= meta.banner %>\n"
              },
              files: {
                src: [ 'css/adventurous.min.css', 'js/adventurous.min.js' ]
              }
            }
        },

        uglify: {
            distmin: {
                files: {
                    "js/adventurous.min.js": ["js/adventurous.js"],
                    "js/uikit.min.js": ["js/uikit.js"]
                }
            },
            avgrund: {
                files: {
                    "js/adventurous.min.js": ["js/adventurous.js"]
                }
            }
        },

        watch: {
            src: {
                files: ["less/*.less", "js/src/*.js", "js/adventurous.js"],
                tasks: ["build"]
            }
        }

    });

    // Load grunt tasks from NPM packages
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-banner");

    // Register grunt tasks
    grunt.registerTask("build", ["jshint", "less", "cssmin", "concat:dist", "uglify:distmin", "usebanner", "concat:avgrund"]);
    grunt.registerTask("default", ["build"]);

};
