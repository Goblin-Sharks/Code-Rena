const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  score: { type: Number, required: false },
});

module.exports = User = mongoose.model('User', userSchema);
// testing for database connection
// User.create({ username: 'jiaxin', password: 'fdsa', score: 1 }, (err, data) => {
//   console.log('data saved');
// });
