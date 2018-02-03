var mongoose = require('mongoose');


mongoose.Promise - global.Promise;
// mongoose.connect('mongodb://pho7on:12345678@ds223578.mlab.com:23578/todo-api');
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};