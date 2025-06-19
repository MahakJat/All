const express = require("express");
const userModel = require("./models/user.model");
const app = express();

module.exports = app
app.use(express.json());
//create operation

app.post('/create',(req,res)=>{
    const {username , email , password} = req.body;
    console.log(email,username,password);

    userModel.create({
        username:username, //yaha key aur value ka naam same hai toh iski place pe hum sirf username likh dege toh bhi chalega
        email:email,
        password:password,
    })
    res.send("done")
})