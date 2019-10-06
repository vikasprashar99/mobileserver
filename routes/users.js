var express = require('express');
var router = express.Router();

var User = require('../model/User');

/* GET users listing. */
router.get('/', function (req, res) {
  User.find({}, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the database.");
      res.status(200).send(users);
  });
});

router.put('/:mobile', function (req, res) {
  User.findOneAndUpdate({mobile: req.params.mobile}, req.body, {new: true},
function (err, user) {
  console.log(err);
      if (err) return res.status(500).send({'status':'no user'});
      if(!user) return res.status(500).send({'status':'no user'});
      if(user==null) return res.status(500).send({'status':'no user'});
       res.status(200).send({'status': 'success'});
  });
});

// router.post('/', function (req, res) {
//   User.create({
//           mobile:req.body.mobile
//       },
//       function (err, user) {
//           if (err) return res.status(500).send({'status':'no user'});
//           if(!user==null) return res.status(500).send({'status':'nothing written'})
//          res.status(200).send(user);
//          if(user==res) return res.status(500).send({'status':'ok'})
//          res.status(500).send()
//       });
// });


// Delete user
router.delete('/:mobile', function (req, res) {
  User.findOneAndDelete({mobile:req.params.mobile}, function (err, user) {
      if (err) return res.status(500).send({'status':'no user'});
      if(!user) return res.status(500).send({'status':'no user'});
      console.log(err)
res.status(200).send({'status': 'success'});
  });
});

// Update user 
// router.put('/:mobile', function (req, res) {
//   User.findOneAndUpdate(req.params.mobile, req.body, {new: true},
// function (err, user) {
//       if (err) return res.status(500).send("There was a problem updating the user.");
// res.status(200).send(user);
//   });
// });


// router.get('/:mobile', function (req,res){
//   console.log("The data is "+req.params.mobile)
// User.findOne({mobile:req.params.mobile}, function (err, user){
//   console.log(user);
 
//  if(err) return res.send({'status':'fail'});

//  else if(user == null)  return res.send({'status':'no user'});

//  else if(user) return res.send({'status': 'success'})


  // if(err) return res.status(500).send(err);
  // else if (!user) return res.stus(404).send("fail.");
  // else res.status(200).send("success");
// })
// });

router.post('/', function (req, res) {
  User.findOne({heading:req.body.heading,content:req.body.content,mobile:req.body.mobile},function (err, user) 
  {
          if (!user){  User.create({heading:req.body.heading,content:req.body.content,mobile:req.body.mobile}, function (err, user2){
            res.status(200).send({'status':'success', 'response':user2});
          })}
          else return res.status(200).send({'status':'duplicate'})
      //  if (user==null) return res.status(500).send({'status':'nothing written'})
      
      });
    });




module.exports = router;
// function newFunction() {
//   return require('../model/User');
// }

