const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const controller = require('./controllers/submit')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://root:LE7NvbGyvi8QHkB4@cluster0.dm9mb.mongodb.net/onlineJudge?retryWrites=true&w=majority",{
    useNewUrlParser: "true"
})

app.post('/add',controller.addProblem)

app.get("/post",(req,res,next)=>{
    res.send("{name:'mukund'}");
    next();
})

// app.get("/comment",(req,res,next)=>{
//     res.send("<h1>Hello comment</h1>");
// })

mongoose.connection.on("error", err => {
  console.log("err", err);
})
mongoose.connection.on("connected", (err, res) => {
    app.listen(3000,()=>{
        console.log("server up and running");
    }
)
})
