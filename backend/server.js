const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize socket.io with the server
const io = socketIo(server);

// CORS setup for HTTP requests
app.use(cors({
  origin: 'http://localhost:8080',  // Allow frontend to connect
  methods: ['GET', 'POST'],
}));

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('a user connected');
  
  // Handle incoming messages
  socket.on('message', (msg) => {
    console.log('message received:', msg);
    io.emit('message', msg);  // Broadcast message to all connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Run the server on port 5000
server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
