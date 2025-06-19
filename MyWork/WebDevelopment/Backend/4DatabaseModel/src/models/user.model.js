// schema => jis form me data rakha jata hai
//model => jiske help pe schema pe operation perform karte hai operation (curd)

const mongoose  = require("mongoose")

const userSchema =  new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const userModel = new mongoose.model("user",userSchema); //"user" jab bahut are user ban jayege toh sabko hum ek name is identity karege joh ki hai user

module.exports = userModel