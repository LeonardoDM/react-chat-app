const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3333",
    methods: ["GET", "POST"]
  }
})

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


io.on('connection', (socket) => {
    console.log('an user connected')
    socket.emit('connection', null);
})

server.listen(3333, function(){
	console.log('Server online on port 3333')
})