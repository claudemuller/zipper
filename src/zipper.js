const fs = require('fs'),
  zlib = require('zlib');

function getFileContents(filename) {
  return fs.readFileSync(filename, 'utf-8');
}

function compress(filename) {
  return new Promise((resolve, reject) => {
    const compress = zlib.createGzip(),
      fileContents = getFileContents(filename),
      outFilename = filename + '.gz',
      output = fs.createWriteStream(outFilename);

    compress.pipe(output);
    compress.write(fileContents);
    compress.end();

    resolve(true);
  });
}

function decompress(filename) {
  return new Promise((resolve, reject) => {
    const fileContents = getFileContents(filename),
      inflated = zlib.inflateSync(fileContents),
      outFilename = filename.slice(0, filename.indexOf('.gz'));

    fs.writeFileSync(outFilename, inflated);

    return resolve(true);
  });
}

module.exports = {
  compress,
  decompress
};
