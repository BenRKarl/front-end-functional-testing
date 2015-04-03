desc('default Jake task');
task('default', function(){
  console.log('Jake has been jaked!');
});

desc('mocha tests');
task('test', function(){
  jake.exec(['mocha'], {printStdout: true});
});