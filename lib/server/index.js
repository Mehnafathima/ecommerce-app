
console.log("hello world");
const express = require('express'); //express connection
const mongoose = require('mongoose');  //mongoose connection

const authRouter = require("./routes/auth");
const PORT = 3000;
const app = express();
// const DB ="mongodb+srv://mehna:mehna@123@cluster0.yjwd9c7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DB ="mongodb+srv://mehna:mehna@123@cluster0.yjwd9c7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(authRouter);

//connection
mongoose.connect(DB).then(()=> {
    console.log("connected at port number");
}).catch((e) =>{
    console.log(e);
}) 

   app.listen(
    PORT,() =>{
        console.log("connected at port number" )
    }
   );