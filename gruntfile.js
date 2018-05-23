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
    	// 	cssmin:{
	// 		my_target:{
	// 			files: [{
	// 				expand:true,
	// 				cwd: 'css/',
	// 				src:['style.css', '!*.min.css'],
	// 				dest:'css/',
	// 				ext:'.min.css'
	// 			}]
	// 		}
	// 	}

	 });

	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};