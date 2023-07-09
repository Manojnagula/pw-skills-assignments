const express = require('express')

const app = express()

let counter = 0;

app.get('/',(req,res)=>{
    res.json({counter})
})
app.post('/increment',(req,res)=>{
    counter++;
    res.json({counter})
})
app.get('/decrement',(req,res)=>{
    counter--;
    res.json({counter})
})

app.listen(3001,()=>{
    console.log('server started at port 3001');
})
