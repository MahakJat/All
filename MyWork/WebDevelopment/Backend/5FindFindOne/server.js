const app = require("./src/app")
const userModel = require("./src/models/user.model")
const connect = require("./src/db/db")

connect()
app.listen(3000,()=>{
    console.log("server is running at port 3000`")
})