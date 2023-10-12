const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.k2jntc9.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Mongodb connected')
})
.catch(() => {
    console.log('Failed')
})

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model('collection', newSchema)

module.exports= collection