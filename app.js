const express = require('express');
const app = express();
const { createServer } = require('http');
const { Server } = require('socket.io');

httpServer = createServer(app);
const io = new Server(httpServer, {});
io.on('connection', (socket) => {
    console.log(socket.id);
    console.log(socket.handshake.headers);
})

app.set('view engine', 'ejs');
app.use(express.static('./static'))

app.get('/', (req, res) => {
    res.render('index', {});
})

httpServer.listen(3000, 'localhost', () => {
    console.log('listening on 3000');
})