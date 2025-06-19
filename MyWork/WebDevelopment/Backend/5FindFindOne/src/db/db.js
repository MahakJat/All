const mongoose = require("mongoose");

function connect(){
    mongoose.connect('mongodb://localhost:27017/n21').then(()=>{ //mongoose ek promise return karta hai kyu pata nhi database ko connect karne me kitna time lagega //aur then wala part jab  chalega jab promise resolve ho jayega
        console.log("db connnected")
    }
    ).catch(err=>{
        console.log(err)
    })
}

module.exports = connect;