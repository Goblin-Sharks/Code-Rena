const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// require schema
const User = require('./models/userModel');
// require routers
const loginRouter = require('./routes/arena');
const homeRouter = require('./routes/home');
const arenaRouter = require('./routes/login');
const port = process.env.PORT || 5000;
// if (process.env.NODE_ENV === 'production') {
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
//   });
// }
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//set up mongoose
const MONGO_URI =
  'mongodb+srv://Jiajiajiayou:lijiaxin123@cluster0.9wwmn.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'coderena',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
app.get('/', (req, res) => {
  res.json('you are in the homepage');
});
//define route handlers
// app.use('/home', homeRouter);
// app.use('/arena', arenaRouter);
// app.use('/login', loginRouter);
// catch-all route handler for any requests to an unknown route
app.post('/signup', (req, res) => {
  const user = new User(req.body);
  console.log('im in the signup body');
  user.save((err, doc) => {
    if (err)
      return {
        log: `register data save error : Error:${err}`,
        message: {
          err: 'Error occured in register. Check server logs for more details.',
        },
      };
    return res.status(200).json({
      success: true,
    });
  });
});
app.use('*', (req, res, next) => {
  return res.sendStatus(404);
});
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

app.listen(port, () => console.log(`Listening on port ${port}`));
