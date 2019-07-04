 
// Set up the express app
const app = require('express')();
// get all todos
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});
var B=0;
app.get('/api/v1/todos', (req, res) => {

	socket.on('connect', function (socket) {
    console.log('Connected!');
	console.log(socket);
	});
	socket.emit('CH01', 'me', 'T1 test msg');
	//
	socket.on('CH02', function (from, msg) {
		console.log('Server ban ve:', from, ' saying ', msg);
		B=msg;
  });
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: 'Ket qua hien tai: '+B
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
