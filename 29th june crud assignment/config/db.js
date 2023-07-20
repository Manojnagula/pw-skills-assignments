const mongoose = require('mongoose')

const connectToDatabase = async ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log("Server is running at",conn.connection.host)
    })
}

module.exports = {connectToDatabase}