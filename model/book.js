const mongoose = require('mongoose')
const Author = require ('./author')

const BookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3, 
        maxlength: 50
    },
    author: Author
    ,
    genre:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50

    }
})

module.exports = new BookSchema.model('Book', BookSchema)
