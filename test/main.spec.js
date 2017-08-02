describe('Main app', () => {
  describe('compress function', () => {
    it('should return contents of file', () => {
      // Arrange
      const filename = 'test.txt',
        expected = 'hello there';

      // Act
      const actual = compress(filename);

      // Assert
      assert(expected).toEqual(actual);
    });
  });
});
