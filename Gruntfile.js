module.exports = function(grunt) {
	
	// Load plugins
	require('load-grunt-tasks')(grunt);
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! Angular Counter - v<%= pkg.version %> - <%= pkg.homepage %> - (c) 2015 Indri Muska - MIT */\n'
			},
			main: {
				files: {
					'js/angular-counter.min.js': ['js/angular-counter.js'],
					'js/angular-counter-with-easing.min.js': ['js/jquery.easing.min.js', 'js/angular-counter.js']
				}
			}
		},
		'sync-json': {
			options: {
				include: ['name', 'description', 'version']
			},
			bower: {
				files: {
					"bower.json": "package.json"
				}
			}
		}
	});
	
	// Default tasks.
	grunt.registerTask('default', ['uglify', 'sync-json']);
	grunt.registerTask('update-patch', ['bumpup:patch', 'default']);
	
};