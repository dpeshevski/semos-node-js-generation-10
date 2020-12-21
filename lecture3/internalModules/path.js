const path = require('path');

const fileName = __filename;

console.log('delimeter: ', path.delimiter);

console.log('dirname', path.dirname(fileName));

console.log('basename', path.basename(fileName));

console.log('extension', path.extname(fileName));

console.log('parse', path.parse(fileName));

const parsePath = path.parse(fileName);
console.log('Dir', parsePath.dir);

// join
// resove
// normalize