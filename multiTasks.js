const https = require('https');
const { pbkdf2 } = require('crypto');
const fs = require('fs')

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
    console.log(`Hash: Done in ${Date.now() - start}ms`)
  );
}

doRequest()

fs.readFile('multiTasks.js', 'utf8', () => {
  console.log('FS:', Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()

/*
result
238
Hash: Done in 608ms
FS: 609
Hash: Done in 620ms
Hash: Done in 621ms
Hash: Done in 631ms
*/