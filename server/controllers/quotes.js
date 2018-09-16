const mongoose = require('mongoose');

const AnimalSchema  = require('../models/models');

mongoose.model('Animal',AnimalSchema);
var Animal = mongoose.model('Animal')

module.exports = {
  index : function(req, res) {
    Animal.find({},function(err,animals){
      if(err) { console.log(err);}
      console.log(animals);
      res.render('index',{animals: animals});
    });
    console.log('Finding animals!');
  },
  new : function(req, res) {
    res.render('new');
  },
  show : function(req, res) {
    Animal.findOne({_id:req.params.id},function(err,data){
      if(err) { console.log(err);}
      res.render('show',{data: data});
    });
    console.log("Finding animal by id")
  },
  edit : function(req, res) {
    Animal.findOne({_id:req.params.id},function(err,data){
      if(err) { console.log(err);}
      res.render('edit',{data: data});
    });
    console.log("Finding animal by id")
  },

  create : function(req, res) {
      // This is where we would add the user from req.body to the database.
      // var animal = new Animal({name:req.body.name ,weight: req.body.weight,lifespan: req.body.lifespan,diet: req.body.diet,predators: req.body.predators});
      var animal = new Animal(req.body);

      animal.save(function(err){
        if(err){
          for(var key in err.errors){
            req.flash(key, err.errors[key].message);
          }
          res.redirect('/animals');
        }else{
          res.redirect('/');
        }
      })
  },

  update : function(req, res) {
    console.log("The user id requested is:", req.params.id);
    Animal.findOneAndUpdate({_id:req.params.id},{$set:req.body}, function(err,data){
      if(err) { console.log(err);}
      console.log(data);
      res.redirect('/');
    });
    console.log("Finding animal by id")
  },

  delete : function(req, res) {
    Animal.deleteOne({_id:req.params.id}, function(err,data){
      if(err) { console.log(err);}
      console.log(data);
      res.redirect('/');
    });
    console.log("Deleting animal by id")
  },
}
