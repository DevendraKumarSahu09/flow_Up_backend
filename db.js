const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://usergh:12345@cluster0.q0wrq6l.mongodb.net/'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;
