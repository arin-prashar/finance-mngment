const express = require ('express')
const bodyParser=require('body-parser')
const mongoose=require("mongoose")
const userRoute=require('./routes/user')
const path=require('path')
const app=express();

//const db=mongoose.connect("mongodb+srv://nandanupadhyay1234:pkPPznLjgogmQZkC@cluster0.5ltnqvy.mongodb.net/Financemanagement")

const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://nandanupadhyay1234:pkPPznLjgogmQZkC@cluster0.5ltnqvy.mongodb.net/Financemanagement",{dbName:"Financemanagement"
       }).then((data)=>{
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        })    
} 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users',userRoute);

app.get('/', (req, res) => {
    res.sendFile("./s/landing/LoginPage-main/login.html");
  // res.send("What's up doc ?!");
});

connectDatabase();

// start the server
app.listen(3000, () => {
  console.log(`server running : http://localhost:3000`);
  });