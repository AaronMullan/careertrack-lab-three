const fs = require('fs').promises;

const mkdirp = (path) => 
  fs.mkdir(path, { recursive: true });

const writeJSON = (path, object) => fs.writeFile (path, JSON.stringify(object));

const readJSON = (path) => fs.readFile(path, 'utf8')
  .then(content => JSON.parse(content));

const readDirectory = (path) => 
  fs.readdir(path)
    .then(files => Promise.all(files.map(file => readJSON(`${path}/${file}`))));

module.exports = { mkdirp, writeJSON, readJSON, readDirectory };
