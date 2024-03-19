const express = require('express');
 

const authRouter = express.Router();
 authRouter.post('api/signup',(req, res) =>{
    //retrieve data from our client
   const {name, email, password} = req.body;
 });

 module.exports = authRouter;