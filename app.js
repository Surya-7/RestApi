const express = require('express')
const mongoose = require('mongoose')
const alienRouter = require('./routes/aliens')
const app = express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/alienDBex', (err)=>{
  if(err)
    console.log(err);
  else
    console.log("MongDb connected")
});

const con = mongoose.connection;
con.on('open',()=>{
  console.log("Connected..")
})
app.use(express.json())
app.use('/aliens',alienRouter)
app.listen(5000,()=>{
    console.log("Listening to port 5000")
})
