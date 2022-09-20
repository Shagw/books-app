const mongoose = require('mongoose');

module.exports =async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@BOOKSTOREAPP.ymr2nlq.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("Database connection successfully")
    } catch (error) {
        console.log("Error while connecting with the databse",error);
    }
}

