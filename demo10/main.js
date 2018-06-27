require.ensure(['./ab'], function(require) {
  var content = require('./ab');
  document.open();
  document.write('<h1>' + content + '</h1>');
});

require.ensure(['./c'], function(require) {
  var content = require('./c');
  document.write('<h1>' + content + '</h1>');
  document.close();
});
