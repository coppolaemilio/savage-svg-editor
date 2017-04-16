module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/savage-main.min.css': 'scss/savage-main.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
