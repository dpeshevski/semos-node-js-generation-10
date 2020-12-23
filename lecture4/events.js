const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Listener
eventEmitter.on('logger', (respondData) => {
  console.log('Message logged.', respondData);
});

// Raise an event
// eventEmitter.emit('logger');

eventEmitter.on('room21', (argEvent) => {
  // if (argEvent instanceof Object) {
  //   console.log(`Message recevied ${JSON.stringify(argEvent)}`);
  // }

  // if (Array.isArray(argEvent)) {
  argEvent.forEach(item => {
    eventEmitter.emit('logger', item);
    // console.log('Item', item);
  });
  // }
});

const messageData = {
  subject: 'JavaScript NodeJS',
  class: 'Modules',
  lecture: 4,
  students: 14,
  mentor: 'Daniel Peshevski',
}

const messagesData = [
  {
    subject: 'JavaScript NodeJS',
    class: 'Modules',
    lecture: 4,
    students: 14,
    mentor: 'Daniel Peshevski',
  },
  {
    subject: 'JavaScript NodeJS',
    class: 'Modules',
    lecture: 4,
    students: 14,
    mentor: 'Daniel Peshevski',
  }
]

eventEmitter.emit('room21', messagesData);
