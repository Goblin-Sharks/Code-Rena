const User = require('../models/userModel.js');

const userController = {};

userController.getAllUsers = async (req, res, next) => {
  await User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err)
      return next(
        'Error in userController.getAllUsers: ' + JSON.stringify(err)
      );
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
 * createUser - create and save a new User into the database.
 */
// userController.createUser = (req, res, next) => {
//   console.log('working ');
//   User.create(
//     {username: req.body.username, password: req.body.password},
//     (err, user) => {
//       if (err) res.render('../../client/src/component/signup', {error: err});
//       else next();
//     }
//   );
// };

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = (req, res, next) => {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    (err, user) => {
      if (err || user === null) {
        res.locals.user = err;
        return next();
        //res.redirect('/signup');
      } else {
        res.locals.user = user;
        return next();
      }
    }
  );
};

module.exports = userController;
