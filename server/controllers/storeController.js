const fs = require("fs");

exports.addStore = (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html'});
  fs.readFile('./client/index.html', (err, data) => {
    err
      ? res.send('file not found')
      : res.write(data);
    res.end();
  });
};