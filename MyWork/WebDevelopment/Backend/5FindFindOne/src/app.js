const express = require("express")
const userModel = require("./models/user.model")
const app = express();

module.exports = app



app.use(express.json());

// user creation
app.post("/create", async (req,res)=>{
    const {username , email, password} = req.body;

    const user = await userModel.create({ //ye bhi ek promise return karta hai kyu humhe pata nhi hai ki kitna time lagega user ko create karne me 
        username,
        email,
        password
    }).catch(err=>{
        console.log(err)
    })
   
    console.log(user)
    res.send(user)
})

app.get("/get-user" ,async (req,res)=>{
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
    console.log(user5)
})