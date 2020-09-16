const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')

const carsSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    cc: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
})

carsSchema.pre('validate', function(next) {
    if (this.model) {
        this.slug = slugify(this.model, { lower: true, strict: true})
    }
    next()
})


module.exports = mongoose.model('Cars', carsSchema)