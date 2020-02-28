// CONNECTION WITH MONGODB
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vikas:Test123@node-events-j0bd8.mongodb.net/Db?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
var UserSchema = new mongoose.Schema(
  {
    uid:String,
    title:String,
    nameOfExpert:String,
    DateOfEvent:String,
    TimeOfEvent:String,
    description:String,
    location:String, 
     mobilenumber:String  },
  { collection: "Users" }
);
var User = mongoose.model("User", UserSchema);
module.exports = User;