var svgtocss = require('svgtocss');

module.exports = function(grunt) {

	return grunt.registerMultiTask('svgtocss', 'Grunt plugin to convert svg to css', function() {

		console.log(this.files)
			this.files.forEach(function(file) {

				
				svgtocss.encode(file.src, {
					base64: true
				}, function() {
					console.log('all done!');
				})



			})
			

	});
};