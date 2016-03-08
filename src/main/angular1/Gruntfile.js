module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: 'src',
                    livereload: true,
                    hostname: 'localhost',
                    middleware: function (connect, options, middlewares) {
                        middlewares.unshift(require('grunt-connect-proxy/lib/utils').proxyRequest);
                        return middlewares;
                    }
                },
                proxies: [
                    {
                        context: ['/webresources', '/bvrules'],
                        rewrite: {
                            '^/bvrules': '/ng-realworld/bvrules',
                            '^/webresources': '/ng-realworld/webresources'
                        },
                        host: 'localhost',
                        port: 8080,
                        https: false,
                        xforward: true
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
        },
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['Firefox'],
                    files: [
                        'src/bower_components/jquery/dist/jquery.js',
                        'src/bower_components/angular/angular.js',
                        'src/bower_components/angular-mocks/angular-mocks.js',
                        'src/bower_components/angular-resource/angular-resource.js',
                        'src/app.js',
                        'src/app/**/*.js',
                        'test/**/*.js'
                    ],
                    // coverage reporter generates the coverage
                    reporters: ['progress', 'coverage'],
                    preprocessors: {
                        'src/app/**/*.js': ['coverage']
                    },
                    // optionally, configure the reporter
                    coverageReporter: {
                        type: 'html',
                        dir: 'test/coverage/'
                    }
                }
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
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-karma');

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
        'configureProxies:server',
        'connect:server',
        'watch:development'
    ]);

    grunt.registerTask("package", [
        'test',
        'build:usemin',
        'maven:install'
    ]);

    grunt.registerTask('test', [
        'karma'
    ]);

};
