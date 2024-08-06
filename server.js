const express = require ('express')
const mongoose = require('mongoose')
const app = express()
require ('dotenv').config()
const port = process.env.PORT || 3000
const MONGOURI = process.env.MONGO_URI
const bookRoute = require('./routes/book')


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes 
app.use('/api/books', bookRoute)

//Connect to MongoDB Atlas
mongoose.connect(MONGOURI).then(()=>{
    console.log("connected to mongoDB")
}).catch(error => {
    console.log("Something went wrong, unable to connect", error) //This is a catch error
})


//START SERVER
app.listen (port, ()=>{
    console.log ("Server Running successfully at port: " + port)
})