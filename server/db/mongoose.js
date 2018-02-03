var mongoose = require('mongoose');


mongoose.Promise - global.Promise;
mongoose.connect('mongodb://pho7on:12345678@ds223578.mlab.com:23578/todo-api');

module.exports = {
    mongoose
};