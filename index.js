var Path = require('path');

module.exports = function (robot) {
  path = Path.resolve(__dirname, 'scripts');
  robot.load(path);
};
