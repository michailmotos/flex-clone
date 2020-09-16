const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

const ticketSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
})


module.exports = mongoose.model('tickets', ticketSchema)