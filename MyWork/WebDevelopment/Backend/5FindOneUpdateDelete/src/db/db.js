const mongoose = require("mongoose");

function connect(){
    mongoose.connect("mongodb://0.0.0.0/n21").then(()=>{
        console.log("db connected");
    }).catch((err )=> {
        console.log(err)
    });
}

module.exports = connect;