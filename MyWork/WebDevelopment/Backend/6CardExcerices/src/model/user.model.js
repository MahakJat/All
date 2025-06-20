const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
},
  password:{
    type:String
  },
  imageUrl:{
    type:String
  }
})

const userModel = new mongoose.model("user",userSchema);

module.exports = userModel