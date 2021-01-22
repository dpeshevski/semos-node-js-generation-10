const Emitter = require('./emitter.js');

const emitter = new Emitter();

emitter.on('message', (data) => {
  console.log(data);
});

emitter.emitter('Welcome to Semos Education');
