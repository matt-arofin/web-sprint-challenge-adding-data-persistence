// build your server here and require it from index.js
const express = require('express');

// require router(s) 
const projectsRouter = require('./project/router');
// const resourceRouter = require('./resource/router);
// const taskRouter = require('./task/router);

const server = express();

server.use(express.json());
// use router(s)
// global error handling middleware here:
server.use('/', (err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({message: err.message});
});

server.use('/api/projects', projectsRouter);

module.exports = server;