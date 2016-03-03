module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: 'localhost',
                    base: 'src',
                    livereload: true,
                },
                proxies: [
                    {
                        context: '/webresources',
                        host: 'localhost',
                        port: 8080
                    }
                ]
            }
        },
        ngAnnotate: {
            build: {
                files: [{
                        expand: true,
                        src: "src/{,app/**/}*.js",
                        dest: '.tmp'
                    }]
            }
        },
        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dist/ng1'
            }
        },
        uglify: {
            options: {
                sourceMap: false
            }
        },
        clean: {
            dist: ['.tmp', 'dist', '*.war']
        },
        usemin: {
            html: ['dist/ng1/{,*/}*.html'],
            css: ['dist/ng1/styles/{,*/}*.css'],
            js: ['dist/ng1/scripts/{,*/}*.js']
        },
        copy: {
            html: {
                src: '{,**/}*.html',
                expand: true,
                cwd: 'src',
                dest: 'dist/ng1/'
            },
            index: {
                src: 'index.html',
                expand: true,
                cwd: 'src',
                dest: 'dist/ng1/'
            },
            fonts: {
                src: 'fonts/**',
                expand: true,
                cwd: 'src/app/assets',
                dest: 'dist/ng1/app/assets'
            },
           

        },
        watch: {
            options: {
                livereload: true
            },
            development: {
                files: ['src/**'],
                tasks: []
            }
        },
        maven: {
            options: {
                groupId: 'de.gedoplan',
                packaging: 'war',
                artifactId: 'ng1-realworld',
                injectDestFolder: false
            },
            'install': {
                options: {
                    goal: 'install'
                },
                expand: true,
                cwd: 'dist/',
                src: '**'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-maven-tasks');

    grunt.registerTask('build:usemin', [
        'clean:dist',
        'copy:html',
        'copy:index',
        'copy:fonts',
        'ngAnnotate:build',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);

    grunt.registerTask("start", [
        'connect:server',
        'watch:development'
    ]);

    grunt.registerTask("package", [
        'build:usemin',
        'maven:install'
    ]);

};
