const fs = require('fs'); // import fs from 'fs';


// CRUD operations
// Create, Read, Update, Delete

// Create a file
// Sync Method
fs.writeFileSync('./file.txt', 'Здраво!');

const loggerCb = (error, data) => {
  if (error) {
    console.error(error);
  }
  console.log(data)
}

// Async Method
fs.writeFile('newfile.txt', 'Hello 2021', error => loggerCb(error, 'The file has been saved!'));

// Raad the content of the file
const data = fs.readFileSync('./file.txt', 'utf-8');
// console.log(data.toString());
console.log(data);

fs.readFile('./file.txt', 'utf-8', (error, data) => loggerCb(error, data));

// Update File
fs.writeFileSync('./newfile.txt', 'hello 2021 year make us developers');

// Rename File
fs.renameSync('./file.txt', './newpathfile.txt');
fs.renameSync('./file.txt', './files/renamedfile.txt');

fs.rename('./newpathfile.txt', './files/rename.txt', (error) => loggerCb(error, 'The file has been renamed!'));

// Delete File
// fs.unlinkSync('./newfile.txt');

fs.unlink('./file.txt', (error) => loggerCb('The file has been deleted!'));

const speak = {
  say: function (text) {
    console.log(text);
  }
}

speak.say('Hello');

function sayHello (text) {
  console.log(text);
}

sayHello('Hello Function');