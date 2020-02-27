var express = require('express');
var User = require('./model/User');
var app = express();
var cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* GET users listing. */
app.get('/getEvents', function (req, res) {
  User.find({},function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the database.");
      res.status(200).send(users);
      console.log(users,"not found") 
  });
});
app.get("/", (req, res, next) => {
  User.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
// app.get('/get', function (req, res) {

// User.find().toArray((err, items) => {
//   console.log(items)
// })
// })



// // Delete user
// app.delete('/:mobile', function (req, res) {
//   User.findOneAndDelete({mobile:req.params.mobile}, function (err, user) {
//       if (err) return res.status(500).send({'status':'no user'});
//       if(!user) return res.status(500).send({'status':'no user'});
//       console.log(err)
// res.status(200).send({'status': 'success'});
//   });
// });


    app.listen(8000, () => {
      console.log("server running on 8000");
    });
    module.exports = app;