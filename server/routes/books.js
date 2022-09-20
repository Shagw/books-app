const express = require('express');
const mongoose = require('mongoose');
const Book = mongoose.model("Book")

const router = express.Router();

router.post('/addBooksData',(req,res)=>{
    const {title,author,imgUrl,price,review,description,discount,newArrivals} = req.body;
    if(!title || !author || !imgUrl || !price || !review || !description || !discount ){
      return res.status(400).json({error:"Please add all the fields!!"});
    }
    Book.findOne({title:title})
    .then((savedBook)=>{
        console.log("1")
        if(savedBook){
            return res.status(422).json({error:"This Book already exists!!"});
        }
            const book = new Book({
                title,
                author,
                imgUrl,
                price,
                review,
                description,
                discount,
                newArrivals
            })
            book.save()
            .then(book=>{
                res.json({message:"Book Data Saved Successfully"});
            })
            .catch(err=>{
                console.log(err);
            })
        })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/getBooksData',async (req,res)=>{
    const books = await Book.find({})
    res.status(201).json(books);
})



module.exports = router;