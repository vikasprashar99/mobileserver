var express = require("express");
var User = require("./model/User");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

/* GET EVENTS listing. */
app.get("/getAllEvents", function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      return res.status(500).send("There was a problem finding the database.");
    res.status(200).send(users);
    console.log(users, "not found");
  });
});

// Post EVENTS
app.post("/addEvent", (req, res) => {
  const newEvent = new User({
    uid:req.body.uid,
    title: req.body.title,
    nameOfExpert:req.body.nameOfExpert,
    DateOfEvent:req.body.DateOfEvent,
    TimeOfEvent:req.body.TimeOfEvent,
    description:req.body.description,
    location:req.body.location,
    mobilenumber:req.body.mobilenumber
  });
  newEvent.save(err => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send("success");
  });
});



app.listen(8000, () => {
  console.log("server running on 8000");
});
module.exports = app;

