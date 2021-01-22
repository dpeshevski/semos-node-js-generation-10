const EventEmitter = require('events');

class Emitter extends EventEmitter {
  emitter(message) {
    this.emit('message', message);
  }
}

module.exports = Emitter;
