
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //adds uglify
    // uglify: {
    //   client: {
    //     src: 'client/scripts/client.js',
    //     dest: 'server/public/scripts/client.min.js'
    //   }
    // },

    //add copy
    copy: {
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist/',
        src: ['jquery.js'],
        dest: 'server/public/vendors/jquery'
      },
      bootstrap: {
        expand: true,
        cwd: "node_modules/bootstrap/dist/",
        src: ["css/*.*","fonts/*.*","js/*.*"],
        dest: "server/public/vendors/bootstrap"
      },
      views: {
        expand: true,
        cwd: 'client/views/',
        src: ['*.*'],
        dest: 'server/public/views/'
      },
      scripts: {
        expand: true,
        cwd: 'client/scripts/',
        src: ['*.*'],
        dest: 'server/public/scripts/'
      },
    },

    //add watch client side development - includes livereload
    watch: {
      options: {
        livereload: true,},
      client:{
        files: ['client/scripts/*.*', 'client/views/*.*'],
        // What tasks should I complete
        // tasks: ['uglify', 'copy'],},
        tasks: ['copy'],},
    }
  });//end grunt.initConfig

  //grunt loan plugins
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //grunt run plugins
  // grunt.registerTask('default', ['uglify','copy','watch']);
  grunt.registerTask('default', ['copy','watch']);
}; //end export
