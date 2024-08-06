const mongoose = require('mongoose');
const Author = require('./author');
const yup = require ('yup')

//BOOK SCHEMA
const BookSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    author: {
        type: Author.schema,
        required: true
    },
    genre: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
});
//Create a yup schema
const Validatebook = book => {
     const schema = yup.object().shape({
        bookName: yup.string().required().min(3).max(50),
        authorName: yup.String().required().min(3).max(100),
        authorAge: yup.number().required().min(10, 'Age must be Greater than 10').max(100),
        genre: yup.String().required.min(3).max(50)
     })
     //Returning aa promise
    return schema
    .Validatebook(book)
    .then(book=>book)
    .catch((error) => {
        return{
            message: error.message
        }
    })
}

exports.Book = new mongoose.model('Book', BookSchema);
exports.Validatebook = Validatebook
