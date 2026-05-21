
const express = require('express')
const app = express()
// Build in Middleware
app.use(express.json())
app.use(express.static('public'))

app.post('/users',(req,res) =>{
    console.log(req.body)
    res.send(req.body)
})
// middleware
const middleware = (req,res,next) =>{
    console.log('middleware')
    next()
} 

app.use(middleware)

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(3000)