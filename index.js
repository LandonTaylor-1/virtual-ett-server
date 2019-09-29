const express = require("express");
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require('path');

const INDEX = path.join(__dirname, 'public/index.html');
app.use((req, res) => res.sendFile(INDEX) )

let pesLeftRoutes = require('./routes/pesLeftRoute');
let pesRightRoutes = require('./routes/pesRightRoute');

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(pesLeftRoutes);
app.use(pesRightRoutes);

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});

const port = process.env.PORT || 3001;

const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('pesLeft', function(data){
    console.log('pesLeft: ' + data);
    io.sockets.emit('pesLeft', data)
  });
  socket.on('pesRight', function(data){
    console.log('pesRight: ' + data);
    io.sockets.emit('pesRight', data)
  });
});
server.listen(port)