const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    profileImage:{
        type:String
    }
})

const userModel = new mongoose.model("user",userSchema);
module.exports = userModel





