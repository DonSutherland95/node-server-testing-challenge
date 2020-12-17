const express = require('express');
const server = express();
const usersRouter = require('./users/userRouter')

server.use(express.json());
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send({message:'api connected'});
});

module.exports = server;
