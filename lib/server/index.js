
console.log("hello world");
const express = require('express'); //express connection
const mongoose = require('mongoose');  //mongoose connection

const authRouter = require("./routes/auth");
const PORT = 3000;
const app = express();
const DB ="mongodb+srv://mehna:mehna123@cluster0.hlmye7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//middleware
app.use(express.json());
app.use(authRouter);

//connection
mongoose.connect(DB).then(()=> {
console.log("DB CONNECTED FINALLY");
}).catch((e) =>{
    console.log(e);
}) ;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
  });