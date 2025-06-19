const express = require("express")
const app = express();
const userModel = require("./models/user.model")

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render('index')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post("/create",async(req,res)=>{
    const {username ,profileImage} = req.body;
    const user = await userModel.create({
        username,
        profileImage
    })
    res.redirect('/feed')
})

app.get('/feed',async (req,res)=>{
    const allUser = await userModel.find();
    res.render('feed',{
        users:allUser
    })
})


module.exports = app;

