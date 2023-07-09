const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({msg:'I am home page'})
})
app.get('/about',(req,res)=>{
    res.json({msg:'I am about page'})
})
app.get('/contact',(req,res)=>{
    res.json({email:'support@peskils.com'})
})

app.listen(3002,()=>{
    console.log('server started at 3002 port')
})