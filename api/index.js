const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome"})
});

app.use(cors(corsOptions)) // Use this after the variable declaration

app.listen(port,()=>{
  console.log("running");
});