const  connect  = require("./src/db/db");
const app = require("./src/app");
app.listen("3000",()=>{
    console.log("server is running at port 3000")
})
connect()