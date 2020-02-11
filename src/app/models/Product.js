const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
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
    }
});

ProductsSchema.virtual('image_url').get(() => {
    return `http://192.168.0.13:3000/files/${this.image}` 

})

module.exports = mongoose.model('Product', ProductsSchema);