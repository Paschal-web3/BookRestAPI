const mongoose = require('mongoose')
const Author = require ('./author')

const BookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3, 
        maxlength: 50
    },
    author: {
    type: Author.schema,
    required: true
    },

    genre:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50

    }
})

module.exports = mongoose.model('Book', BookSchema)
