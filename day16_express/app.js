
const express = require('express')
const app = express()
// middleware

const middleware = (req,res,next) =>{
    console.log('middleware')
    //next()
} 

app.use(middleware)

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000)