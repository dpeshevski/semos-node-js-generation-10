const fs = require('fs');

// flowing mode

let data = '';

const readableStream = fs.createReadStream('./tempFile/test.txt'); // Create a readable stream

readableStream.setEncoding('utf8');

// data, end, error
readableStream.on('data', (chunk) => {
  data += chunk;
  // data = data + chunk;
  // '' + chunk;

  // 'hello';

  // 'hello' + 'world' = 'hello world';

  // 'hello world 222';
});

// console.log(data);

readableStream.on('end', () => {
  console.log(data);
});

readableStream.on('error', (error) => {
  console.log('ERRR', error);
});

console.log('program ended!');






