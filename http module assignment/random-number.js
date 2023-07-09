const express = require('express')

const app = express()



app.get('/random',(req,res)=>{
    res.json(randomGenerator())
})

function randomGenerator(){
    // creating an object to return it at the end.
    let number = {
        random : "",
    }

    // generating a positive decimal and rounding it to nearest integer.
    let num = Math.floor(Math.random()*10000)

    // pushing resulted number to number object.
    number.random = num;

    return number
}

app.listen(3003,()=>{
    console.log('server started at port 3003')
})