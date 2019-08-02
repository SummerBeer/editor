const path = require('path');

module.exports = {
  port: 9998,
  staticPath: path.join(__dirname, './static'),
  viewsPath: path.join(__dirname, './static'),
};