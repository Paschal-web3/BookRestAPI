
//REMEMBER THAT THIS MODEL WAS NOT IMPORTED
//THEY ARE USED FOR TESTING MY ABILITY TO KNOW IF I ACTUALLY LEARNT HOW TO CREATE a book model
const mongoose = require ('mongoose')

const People = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    age:{
        type: Number,
        required: true,
        min: 10,
        max: 100
    },
    Occupation: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
    },
    Income: {
        type: Number,
        required: true
    }

})

module.exports = new mongoose.model('People', People )