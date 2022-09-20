const express = require('express')
const dotenv = require('dotenv');
const Connection = require("./databases/db.js");
const cors = require('cors');

require('./models/user')
require('./models/book')
require('./models/wishlist')
require('./models/cart')


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

Connection(username,password);

app.use(require('./routes/auth.js'));
app.use(require('./routes/books.js'));
app.use(require('./routes/wishlist.js'));
app.use(require('./routes/cart.js'));


app.listen(PORT,()=>{
    console.log(`Server is running successfully on PORT ${PORT}`)
})