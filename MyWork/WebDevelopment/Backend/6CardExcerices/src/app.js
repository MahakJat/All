const express = require("express");
const app = express();
const userModel = require("./model/user.model");
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render('index');
})

app.use(express.json());  //this midware is used for the json
app.use(express.urlencoded({extended:true})) // this midware is used for the form data



app.post("/create",async (req,res)=>{
    const {username,email,password,imageUrl} = req.body
    // console.log(username,email,password,profileImage);
    // console.log(req.body);
    const user = await userModel.create({
        username,
        email,
        password,
        imageUrl
    })
    res.send(user);
})


module.exports = app;

