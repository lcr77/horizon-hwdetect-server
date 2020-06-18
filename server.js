//using express nodejs web framework for now
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000

//Server connection

//serving out on to web page
app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
});

//actions to be performed on socket io connection
io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('io message', (msg) => {
                io.emit('io message', msg);
                console.log('message: ' + msg);
        });

        socket.on('disconnect', () => {
                console.log('user disconnected');
        });
});


// listen on localhost, port 3000
http.listen(port, () => {
        console.log('listening on *:' + port);
});


