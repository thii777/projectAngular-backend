const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
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
    },
    price: {
        type: Number,
        required: true
    }
},{
    toJSON: {
        virtuals: true,
    },
    toObject: { 
        virtuals: true 
    }
});

ProductsSchema.virtual('image_url').get(function() {
    return `http://172.26.0.54:3000/files/${this.image}` 
})

module.exports = mongoose.model('Product', ProductsSchema);