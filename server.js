const express = require ('express')
const mongoose = require('mongoose')
const app = express()
require ('dotenv').config()


const port = 3000

// app.get('/', (req, res)=>{
//     res.send(" Sent to browser")
// })

const MONGOURI = process.env.MONGO_URI

//Connect to MongoDB Atlas
mongoose.connect(MONGOURI, ).then(()=>{
    console.log("connected to mongoDB", error)
}).catch(error => {
    console.log("Something went wrong, unable to connect") //This is a catch error
})


//START SERVER
app.listen (port, ()=>{
    console.log ("Server Running successfully at port: " + port)
})