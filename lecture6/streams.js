// const { assert } = require('assert');
const fs = require('fs');
const { Readable } = require('stream');


// function sendData (age) {
//   return new Promise((resolve, reject) => {
//     if (age > 18) {
//       resolve('Hello');
//     } else {
//       reject('Error: Invalid data');
//     }
//   });
// }

// function readData() {
//   getData.then((response) => console.log('Response data', response)).catch((err) => cosnole.error(err));
// }

// async function readData() {
//   try {
//     const response = await sendData(27); // response: 'Hello'
//     console.log('Response data', response);
//   } catch (err) {
//     console.error(err);
//   }
// }

// readData();


async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log('Chunk', chunk);
  }
}

const readableFile = fs.createReadStream('./tempFile/test.txt', { encoding: 'utf8' });
logChunks(readableFile);

async function readableToString(readable) {
  let result = '';

  for await (const chunk of readable) {
    result += chunk;
  }

  return result;
}

const readableWithStream = Readable.from('Hello, we are Semos Education!', { encoding: 'utf8' });

readableToString(readableWithStream).then((value) => {
  console.log(value);
});



