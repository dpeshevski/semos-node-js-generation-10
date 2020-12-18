const logModule = require('./loggingModule');

// const calc = require('./calculator');
// calc.add();
// calc.div();
// calc.multi();
// calc.sub();

// destruction
const { add, div, sub, multi } = require('./calculator');

logModule.info('Node.js started'); // calling info from loggingModule module

const sum = add(4, 5); // calling
console.log('Sum is', sum); // 9

const sum2 = add(5, 12); // calling add
console.log('Sum 2 is', sum2);

// construction object
// const users = {
//   id: '11',
//   firstName: 'haha',
//   lastName: 'hihi',
//   gender: 'huhu'
// }

// const id = users.id;
// const firstName = users.firstName;
// const lastName = users.lastName;
// const gender = users.gender;

// destruction object
// const { id, firstName, lastName, gender } = users;