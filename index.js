var Path = require('path');

module.exports = function (robot) {
  var path = Path.resolve(__dirname, 'scripts', 'conch.js');
  robot.load(path);
};
