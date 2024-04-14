// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const PORT = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log('User connected:', socket.id);

    socket.on('join room', roomId => {
        socket.join(roomId);
        socket.to(roomId).emit('other user', socket.id);
    });

    socket.on('offer', payload => {
        io.to(payload.userId).emit('offer', payload);
    });

    socket.on('answer', payload => {
        io.to(payload.userId).emit('answer', payload);
    });

    socket.on('ice-candidate', incoming => {
        io.to(incoming.userId).emit('ice-candidate', incoming);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
