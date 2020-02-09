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

    async index(req, res){
        const { _id } = req.params
        
        // const product = await Product.findAll({ _id });

        return res.json({ _id });
    }
}
