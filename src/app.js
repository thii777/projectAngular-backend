const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')   

mongoose.connect('mongodb://linkTest:linkTest@cluster0-shard-00-00-u1eux.mongodb.net:27017,cluster0-shard-00-01-u1eux.mongodb.net:27017,cluster0-shard-00-02-u1eux.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class App {
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)  
    }
}

module.exports = new App().server