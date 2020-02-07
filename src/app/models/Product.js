const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true 
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    } 
});

module.exports = mongoose.model('Product', ProductsSchema);