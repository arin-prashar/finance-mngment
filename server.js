const express = require ('express')
const bodyParser=require('body-parser')
const mongoose=require("mongoose")
const userRoute=require('./backend/routes/user')
const cors=require('cors');
const path=require('path')
const app=express();

//const db=mongoose.connect("mongodb+srv://nandanupadhyay1234:pkPPznLjgogmQZkC@cluster0.5ltnqvy.mongodb.net/Financemanagement")

const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://nandanupadhyay1234:pkPPznLjgogmQZkC@cluster0.5ltnqvy.mongodb.net/Financemanagement",{dbName:"Financemanagement"
       }).then((data)=>{
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        })    
} 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(userRoute);
app.use('/src', express.static(path.join(__dirname, 'src'))); 
app.get('/', (req, res) => {
    const absolutePath = path.join(__dirname, 'src', 'LoginPage', 'login.html');
    console.log(absolutePath);
    //res.sendFile("C:/finance-mngment/src/LoginPage-main/login.html");
    res.sendFile(path.resolve("./src/index.html"));
  // res.send("What's up doc ?!");
});

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve("./src/LoginPage/login.html"));
})

connectDatabase();

// start the server
app.listen(3000, () => {
  console.log(`server running : http://localhost:3000`);
  });