const EventEmitter = require('events')

class Application extends EventEmitter { }

const app = new Application()

app.on('log', (a) => console.log(a))

console.log(app.emit('log', 'message'))
