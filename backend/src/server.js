const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "HEAD"]
  }
})

io.on('connection', (socket) => {
    console.log('an user connected')
    socket.emit('connection', null);
    
    socket.on('disconnect', () => {
      console.log('user disconnected');
    })

    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    })
})

server.listen(3333, function(){
	console.log('Server online on port 3333')
})