const { personInfo, personFullName } = require('./person');

const person = {
  "firstName": "Jose",
  "lastName": "Mourinho",
  "age": 56,
  "gender": "male"
}

const info = personInfo(person);
console.log(info);


const fullNameInfo = personFullName(person);
console.log(fullNameInfo);