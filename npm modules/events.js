const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('userLoggedIn', (data) => {
  console.log('User logged in:', data);
});

myEmitter.emit('userLoggedIn', { username: 'exampleUser' });
