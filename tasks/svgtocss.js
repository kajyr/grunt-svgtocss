var svgtocss = require('svgtocss');
var path = require('path');

var default_options = {
	style: 'css'
}

module.exports = function(grunt) {

	return grunt.registerMultiTask('svgtocss', 'Grunt plugin to convert svg to css', function() {

		var options = this.options(svgtocss.defaults);


		this.files.forEach(function(file) {

			var files = file.src.map(function(f) { return path.join(file.cwd, f) })
			options.cwd = path.join(file.cwd, file.dest);
			
			svgtocss.encode(files, options, function() {
				console.log('all done!');
			})

		})
		

	});
};