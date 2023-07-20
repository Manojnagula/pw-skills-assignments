const express = require('express')
const cors = require('cors')
const {userRoute} = require('./routes/userRoutes.js')
require("dotenv").config()
const{connectToDatabase} = require("./config/db.js")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/",userRoute)

app.listen(process.env.PORT, async ()=>{
    await connectToDatabase()
    console.log("server connected at port number:",process.env.PORT)
})