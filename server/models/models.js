const mongoose = require('./mongoose');

var AnimalSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Name is required"],
    minlength : [3,"Name must be atleast 3 characters!"],
    maxlength : [255,"Name must be less than 255 characters!"],
  },
  weight: {
    type: Number,
    min: [0,"Weight must be greater than 0"],
    required: [true,"Weight is required"]
  },
  lifespan: {
    type: Number,
    min: [0,"lifespan must be greater than 0"],
    required: [true,"Lifespan is required"]
  },
  predators :{
    type: [String],
    required: [false]
  },
  diet :{
    type: String,
    required: [false]
  }
},{timestamps: true})

module.exports = AnimalSchema
