const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('an user connected')
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg)
    })
    socket.on('disconnect', () => {
        console.log('an user disconnected')
    })
})

server.listen(3333, function(){
	console.log('Server online on port 3333')
})
