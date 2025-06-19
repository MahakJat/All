// const express = require('express')

// const app = express() //instance of express server created but this will not run we will to start
// const fs = require('fs')

//  app.use(express.json())

// // to start the server app.listen 3000 is port number
// app.listen(3000,()=>{
//     console.log("server is running at port 3000"); //no use of this function
// })

// app.get('/',(req,res)=>{
//     res.send("hello");
// })

// // create file
// app.post('/create',(req,res)=>{
//     const {fileName , fileData}  = req.body;
//     const path = './uploads/' + fileName;
//     //with fs we will create file
//     fs.writeFile(path,fileData,(err)=>{ //function tab jalega jab file create ho jayegi
//         if(err){
//             console.log(err)

//         }else{
//             console.log("file create ")
//             res.send("file created")
//         }
//     })
// })

// app.get('/read/:fileName',(req,res)=>{ //in postman http://localhost:3000/read/second.txt
//      const filePath = './uploads/' + req.params.fileName; //params will give the dynamic route name
//      fs.readFile(filePath,{
//         encoding:"utf-8",
//      },(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.send(data); //this data will be in normal langauge; because express its changes the buffer data to send to user in the normal language
//             console.log(data) ;//this will be in the buffer form that is ascii value to get in normal language we use encoding utf-8
//         }
//      })
// })

// // // update

// app.patch('/update/:fileName',(req,res)=>{
//     const {fileData} = req.body
//     const filePath= './uploads/'+ req.params.fileName;

//     fs.writeFile(filePath,fileData,(err)=>{
//         if(err){
//             console.log(err);
//             res.send("file not update")
//         }else{
//          res.send("sedfile updated")
//         }
//     })
// })

// // append
// app.patch('/append/:fileName',(req,res)=>{
//     const {fileData} = req.body;
//     const fileName = req.params.fileName
//     const filePath = './uploads/' + fileName
//     fs.appendFile(filePath,fileData, (err)=>{
//         if(err){
//             console.log(err);
//             res.send("file not update");
//         }else{
//             res.send("file update successfully");
//         }
//     })
// })

//delete

app.delete("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = "./uploads/" + fileName;
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
      res.send("err in deleting the file");
    } else {
      res.send("file deleted");
    }
  });
});

// // get all will return all the files in an array present in the folder

// app.get('/get-all',(req,res)=>{
//    fs.readdir('./uploads',(err,files)=>{
//     if(err){
//         console.log(err)
//         res.send("error in reading the files");
//     }
//     else{
//         res.send(files)
//     }
//    })
// })

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/create", (req, res) => {
  const { fileName, fileData } = req.body;

  const filePath = "./uploads/" + fileName;

  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("file created");
    }
  });
});

app.get("/read/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = "./uploads/" + fileName;

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error in reading file");
    } else {
      res.send(data);
    }
  });
});
app.delete("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = "./uploads/" + fileName;
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
      res.send("err in deleting the file");
    } else {
      res.send("file deleted");
    }
  });
});

app.patch("/update/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = "./uploads/" + fileName;

  const { fileData } = req.body;

  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
      res.send("error in updating file");
    } else {
      res.send("file updated");
    }
  });
});

app.get("/get-all", (req, res) => {
  fs.readdir("./uploads", (err, files) => {
    if (err) {
      console.log(err);
      res.send("directory not readable");
    } else {
      res.send(files);
    }
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
