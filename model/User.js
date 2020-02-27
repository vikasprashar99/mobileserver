var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vikas:Test123@node-events-j0bd8.mongodb.net/eventsData?retryWrites=true&w=majority',{ useNewUrlParser: true });
var UserSchema = new mongoose.Schema({  
  title: String,
  nameOfExpert:String,
  DateOfEvent:String,
  TimeOfEvent:String,
  description:String,
  location:String,
  mobilenumber:String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');