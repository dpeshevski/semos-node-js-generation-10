const fs = require('fs');
const readableStream = fs.createReadStream('./tempFile/test.txt');

let data = '';
let chunk;

// readableStream.

readableStream.on('readable', () => {
  while ((chunk = readableStream.read()) !== null) {
    data += chunk;
  }
});

readableStream.on('end', () => {
  console.log(data);
});
