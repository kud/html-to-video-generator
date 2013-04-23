/*global module:false*/
module.exports = function(grunt) {

    // Import
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-casperjs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    // Config
    grunt.initConfig({

        // Clean build folder
        clean: {
            all: ["build/*"],
            frame: ["build/frames/*"],
            site: ["build/site/*"],
            video: ["build/video/*"]
        },

        // Copy assets
        copy: {
          assets: {
            files: [{
              expand: true,
              cwd: 'app/assets/',
              src: ['**'],
              dest: 'build/site/'
            }]
          }
        },

        // Compass rocks
        compass: {
            dev: {
              options: {
                sassDir: 'app/styles',
                cssDir: 'build/site/css',
                outputStyle: 'expanded',
                noLineComments: false,
                force: false,
                imagesDir: 'build/site/img',
                fontsDir: 'font',
                relativeAssets: true
              }
            },
            prod: {
              options: {
                sassDir: 'app/styles',
                cssDir: 'build/site/css',
                outputStyle: 'compressed',
                noLineComments: true,
                force: false,
                imagesDir: 'build/site/img',
                fontsDir: 'font',
                relativeAssets: true
              }
            }
        },

        // Some shell cmds
        shell: {
            generateVideo: {
                command: './bin/generateVideo.sh',
                stdout: true,
                stderr: true
            }
        },

        casperjs : {
            files: ['bin/generateFrames.js']
        },

        connect: {
          server: {
            options: {
              port: 1337,
              base: 'build/site',
              hostname: ''
            }
          }
        },

        // $ grunt watch
        watch: {
            site: {
                files: [
                    'app/**'
                ],
                tasks: [
                    'site'
                ]
            }
        }
    });

    // Tasks
    grunt.registerTask('default',   ['site', 'connect', 'watch']);
    grunt.registerTask('all',       ['clean:all', 'copy:assets', 'compass:dev', 'casperjs', 'shell:generateVideo']);
    grunt.registerTask('site',      ['clean:site', 'copy:assets', 'compass:dev']);
};