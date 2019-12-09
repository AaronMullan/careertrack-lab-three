const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectory
} = require('../lib/file-system-functions');


describe('mkdirp module', () => {
  beforeAll(() => {
    return mkdirp('./testingSpace');
  });

  describe('writeJSON', () => {
    it('writes objects to JSON', () => {
      return writeJSON('./testingSpace/subDirectory', { 1: 'hello', 2: 'goobye' })
        .then(() => {
          return fs.readFile('./testingSpace/subDirectory', 'utf8');
        })
        .then((contents) => expect(contents).toEqual('{"1":"hello","2":"goobye"}'));
    });
  });

  describe('readJSON', () => {
    it('reads objects from JSON', () => {
      return readJSON('./testingSpace/subDirectory')
        .then((contents) => expect(contents)
          .toEqual({ 1: 'hello', 2: 'goobye' }));
    });
  });
});
describe('readDirectory', () => {
  it('reads all files in a directory as objects', () => {
    return readDirectory('./lib')
      .then((contents) => expect(contents)
        .toEqual(['Schema.js', 'Validator.js', 'file-system-functions.js', 'models.js', 'types.js']));
  }); 
  afterAll(() => {
    return fs.rmdir('./testingSpace', { recursive: true });
  });
});
