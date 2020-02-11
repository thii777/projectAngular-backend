const Product = require('../models/Product')

module.exports = {
    async store(req, res){
        const { filename } = req.file
        const {  
            name, 
            brand,
            color, 
            size, 
            price 
        } = req.body
        
        const product = await Product.create({
            image: filename, 
            name, 
            brand, 
            color, 
            size, 
            price
        })

        return res.json(product)
    },

    async show(req, res){
        const { id } = req.params
        const product = await Product.find({id})
        return res.json(product);
    },

    async index(req, res){
        const product = await Product.findById(req.params.product_id)
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.product_id, req.body, {new: true}) 
        return res.json(product)   
    },

    async delete(req, res){        
        await Product.findByIdAndDelete(req.params.product_id)
        return res.json({ message: 'delete success'})
    }
}
