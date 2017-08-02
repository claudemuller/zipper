const fs = require('fs');

module.export = function compress(filename) {
  return fs.readFileSync(filename);
};
