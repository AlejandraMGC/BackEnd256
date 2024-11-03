const mongoose = require('mongoose');
require('dotenv').config();

// conxion con mongo
const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then (() => console.log("estamo conectados con mongoDB"))
    .catch((err) => console.log(err));
}

module.exports = conectarBD;