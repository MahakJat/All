const express  = require('express');
const userModel = require("./models/user.model")
const app = express();

app.use(express.json());

app.post("/create",async (req,res)=>{
    const {username , email,password} = req.body;
    console.log(username,email,password);

    const user =  await userModel.create({
        username,
        email,
        password
    })
    res.send(user);
})

app.get("/get-user",async (req,res)=>{
    const user = await userModel.find()//gives all the user in the array
    const user1 = await userModel.find({ //gives the user object with user name mahak //can give condition and these condition are called query and if the condition doesnot match with any of the object then writes the empty array
        username:"mahak"
    })//gives all the user in the array
    const user2 =  await userModel.find({ //this will return empty error if no object is matched
        username:"user" 
    })
    const user3 = await userModel.findOne() //this will return the first object of the usermodel and it is must to give query in the findOne
    const user4 = await userModel.findOne({
        username:"mahak" //will return the first object with username mahak it always retur
    })
    const user5 = await userModel.findOne({
        username:"hello"//if does not match with any user returns null
    })
    res.send(user5); 
    console.log(user5);
})

app.patch("/update",async (req,res)=>{
    // and if the first mupltiple user then the first user will be updated
    await userModel.findOneAndUpdate({ //find one and update take two object as parameter obj1 includes which parameter to be updated and obj2 have by which value it is updated
        username:"JohnDoe"
    },{
        username:"John"
    })

    // agar jis value ko change kar hai aur woh hai hi nhi toh kyu change nhi hoga
    await userModel.findOneAndUpdate({ 
        username:"Jonny"
    },{
        username:"John"
    })
     res.send("user update")
})


app.delete("/delete",async (req,res)=>{
   //findOneAndDelete take one object which we have to delete
   await userModel.findOneAndDelete({
    username:"John",
   })

//  this deletes the first user
   await userModel.findOneAndDelete({})

// if property does not match does not delete any thing and does not return anything
await userModel.findOneAndDelete({
    username : "John"
})



})
module.exports = app;