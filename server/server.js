// const http = require('http')
const express = require('express');


//----------------------------
const app = express();
// const server = http.createServer(app);
//----------------------------

const mongoose = require('mongoose');

const path = require('path');


//socket io initiating---------------
// const socketio = require('socket.io');
// const io = socketio(server);
//-------------------------


// require schema
const User = require('./models/userModel');
// require routers
const loginRouter = require('./routes/arena');
const homeRouter = require('./routes/home');
const arenaRouter = require('./routes/login');

// if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });
// }

//set up mongoose
const MONGO_URI =
  'mongodb+srv://Jiajiajiayou:lijiaxin123@cluster0.9wwmn.mongodb.net/<dbname>?retryWrites=true&w=majority';

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'coderena',
//   })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));
//define route handlers
// app.use('/home', homeRouter);
// app.use('/arena', arenaRouter);
// app.use('/login', loginRouter);
//eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.on('error', function (err) {
  console.log('something went wrong')
})


// io.on('connection', (sock) => {
//   console.log('someone connectected!')
//   // sock.emit('id', userid)
//   // io.sockets.emit('announcement', userid + ' has connected')
// })

app.listen(5000);
