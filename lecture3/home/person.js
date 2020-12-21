function personFullName (person) {
  // const fullName = 'Full name:' + ' ' + person.firstName + ' ' + person.lastName;
  // return fullName;

  // const text = 'Full name: Jose Mourinho';

  // ES6+ feature
  const fullNameTemplate = `Full name: ${person.firstName} ${person.lastName}`;
  return fullNameTemplate;
}


function personInfo (person) {
  // console.log(person);
  const info = `Perons info: ${person.firstName} ${person.lastName} ${person.gender} ${person.age}`;
  return info;
}

function peopleList (people) {
  return people;
}

// function getUser

module.exports = {
  personInfo,
  personFullName,
  peopleList, 
}
