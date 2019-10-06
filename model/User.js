var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TestDb',{ useNewUrlParser: true });
var UserSchema = new mongoose.Schema({  
  //name: String,
  mobile: String,
  heading:String,
  content:String
  
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');