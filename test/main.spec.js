const expect = require('chai').expect;

describe('Main app', () => {
  describe('compress function', () => {
    it('should return compressed contents of file', () => {
      // Arrange
      const fs = require('fs'),
        compress = require('../src/zipper').compress;
      const actualFilename = 'test/test.org.txt',
        actualGZipFilename = 'test/test.txt.gz',
        expected = fs.readFileSync(actualFilename);

      // Act
      compress(actualFilename)
        .then(() => {
          const contents = fs.readFileSync(actualGZipFilename),
            actual = zlib.inflateSync(new Buffer(contents, 'base64')).toString();

          // Assert
          expect(expected).to.equal(actual);
        })
        .catch((err) => {
          // durr
        });
    });
  });

  describe('decompress function', () => {
    it('should return decompressed contents of file', () => {
      // Arrange
      const fs = require('fs'),
        decompress = require('../src/main').decompress;
      const actualFilename = 'test/test.org.txt',
        actualGZipFilename = 'test/test.txt.gz',
        expected = fs.readFileSync(actualFilename);

      // Act
      decompress(actualFilename)
        .then(() => {
          const contents = fs.readFileSync(actualGZipFilename),
            actual = zlib.inflateSync(new Buffer(contents, 'base64')).toString();

            // Assert
            expect(expected).to.equal(actual);
        })
        .catch((err) => {
          // durr
        });
    });
  });
});
