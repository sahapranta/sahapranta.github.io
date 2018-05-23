module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
	    uglify:{
	    	options:{
	    		manage:false
	    	},
	    	my_target:{
	    		files:{
	    			'js/theme.min.js':['js/theme.js', 'js/contact.js']
	    		}
	    	}
	    },
	    cssmin:{
			my_target:{
				files: [{
					expand:true,
					cwd: 'css/',
					src:['style-dev.css', '!*.min.css'],
					dest:'css/',
					ext:'.min.css'
				}]
			}
		},
		htmlmin: {
			options:{
				removeComments:true,
				collaspseWhitespace:true,
				sortAttributes:true,
				sortClassName:true,
				minifyCSS:true,
				minifyJS:true
			},
			my_target:{
				files:{
					'index.html':'dev/index.html'
				}
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
};