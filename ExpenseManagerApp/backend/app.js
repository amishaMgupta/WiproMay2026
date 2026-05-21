const express = require('express');
const app = express();
const cors= require('cors');
const port = 3000

// call index.html as first page loaded
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// get user name and password from UI for Login
app.get("/users",async(req,res)=>{
    mydata = req.query;
    console.log(mydata.username);
    let messager = {"message":"failed"};
   await fetch("http://localhost:3001/users")
    .then(res=>res.json())
    .then(data=>{

       data.map(ele=>{
        if(mydata.username == ele.userName && mydata.password == ele.password){
            console.log("inside if");
            message= {"message":"successfull"};
           }
        })
       });
      res.send(message);
      
    })
app.listen(port,()=>{
    console.log(`Server is running on port:- ${port}`)
})