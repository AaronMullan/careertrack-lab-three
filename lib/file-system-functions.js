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

module.exports = { mkdirp, writeJSON };
