const mongoose = require("mongoose")

// mongodb is the protocol : // localhost:27017 is the telling it is running on our pc at port 27017 / n21 is the db
function connect(){
    // connect ek promise(action woh pata nhi kab katam hoge kitne time tak chalege) return karta isliya hume pata nhi hai ki woh kam tak rahega isliye hum then
    //  use karte aur iski place pe async await bhi use kar sakte hai
    mongoose.connect("mongodb://localhost:27017/n21").then(()=>{
        console.log("database connected");
    }).catch((err) =>{
         console.log(err)
    })
}

module.exports = connect;