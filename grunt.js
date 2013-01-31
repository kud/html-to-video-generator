/*global module:false*/
module.exports = function(grunt) {

    // Import
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-casperjs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
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
                files: {
                    'build/site/': 'app/assets/**'
                }
            }
        },

        // Compass rocks
        compass: {
            dev: {
                src: 'app/styles',
                dest: 'build/site/css',
                outputstyle: 'expanded',
                linecomments: true,
                forcecompile: false,
                images: 'build/site/img',
                fonts: 'font',
                relativeassets: true,
                debugsass: true
            },
            prod: {
                src: 'app/styles',
                dest: 'build/site/css',
                outputstyle: 'compressed',
                linecomments: false,
                forcecompile: true,
                images: 'build/site/img',
                fonts: 'font',
                relativeassets: true,
                debugsass: false
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
    grunt.registerTask('default',   'all');
    grunt.registerTask('all',       'clean:all copy:assets compass:dev casperjs shell:generateVideo');
    grunt.registerTask('site',      'clean:site copy:assets compass:dev');
};