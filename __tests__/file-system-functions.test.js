const fs = require('fs').promises;
const { mkdirp, writeJSON
} = require('../lib/file-system-functions');


describe('mkdirp module', () => {
  beforeAll(() => {
    mkdirp('./testingSpace');
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

  afterAll(() => {
    fs.rmdir('./testingSpace', { recursive: true });
  });
});

