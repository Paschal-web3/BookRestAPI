const express = require('express');
const router = express.Router();
const {Book, Validatebook} = require('../model/books');


// POST: Create a new book 
router.post("/", async (req, res) => {

    //Validatebook
    const error = await Validatebook(req.body)
    if (error) res.status(400).send (error.message)

        book = new Book({
        name: req.body.bookName,
        author: {
            name: req.body.authorName,
            age: req.body.authorAge
        },
        genre: req.body.genre
    });

        book.save()
        .then(book => {
            res.status(201).send(book); // 201 Created
        })
        .catch(error => {
            res.status(500).send({ message: "Book was not stored in db", error: error.message });
        });
});

//GET BOOKS 
router.get('/', (req, res)=>{
    Book.find()
    .then(books=>res.send(books))
    .catch((error)=>{
        res.status(500).send('Something went wrong')
    })
})

//GET BOOKS BY ID 
router.get('/:bookId', (req,res)=>{
    Book.findById(req.params.bookId).then(book=>{
        if (book) res.send(book)
            res.status(404).send ('book.found')
        .catch((error)=>{
            res.status(500).send(error.message)
        })
    })
})

//OR to make it short using aync
// router.get('/:bookId',async (req,res)=>{
//     const book = await Book.findById(req.params.bookId)
//     if (!book) res.status(404).send("book not found")
//         res.send(book)
// })


//UPDATE BOOK BASED ON ID 
router.put('/:bookId', async (req, res)=>{
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId,{
        name: req.body.bookName,
        author: {
            name: req.body.authorName,
            age: req.body.authorAge
        },
        genre: req.body.genre
    },
    {new: true})
    if (!updatedBook) res.status(404).send ('book not found')
        res.send(updatedBook)
})


// DELETE BOOK BASED ON ID 

router.delete('./:bookId', async (req, res)=>{
    const book = await Book.findByIdAndRemove(req.params.bookId)
    if (!book) res.status(404).send('Book with Id not found')
        res.send(book)
})

module.exports = router;
