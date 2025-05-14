
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName : {
    type : String ,
    require : true
  } ,
  email : {
    type : String ,
    require : true
  } ,
  number : {
    type : Number ,
    require : true
  } ,
});

const User  = mongoose.model('User' , userSchema) ;

module.exports = User ;
