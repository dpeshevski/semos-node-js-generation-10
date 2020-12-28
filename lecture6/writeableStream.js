const fs = require('fs');
// const { Readable, Writable } = require('stream');

const readableStream = fs.createReadStream('./tempFile/test.txt');
const writeableStream = fs.createWriteStream('./tempFile/test-write.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', (chunk) => {
  writeableStream.write(chunk);
});

// writeableStream.write('Hey');
// writeableStream.write('Huhu');
// writeableStream.end('There');
// writeableStream.write('2222');