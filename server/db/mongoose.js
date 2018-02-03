var mongoose = require('mongoose');


mongoose.Promise - global.Promise;
const mlab = 'mongodb://pho7on:12345678@ds223578.mlab.com:23578/todo-api';
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};