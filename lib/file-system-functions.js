const fs = require('fs').promises;

const mkdirp = (path) => 
  fs.mkdir(path, { recursive: true }, (err) => {
    if(err){
      console.log(err);
    }
    console.log('sucess!');
  });

const writeJSON = (path, object) => fs.writeFile (path, JSON.stringify(object), (err) => {
  if(err) throw err;
});

const readJSON = (path) => fs.readFile(path, 'utf8', (err) => {
  if(err) {
    console.log('error');
  }
})
  .then(content => JSON.parse(content));

const readDirectory = (path) => 
  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      return file;
    });
  }
  );
module.exports = { mkdirp, writeJSON, readJSON, readDirectory };
