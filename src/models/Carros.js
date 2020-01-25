const mongoose = require('mongoose')


const CarroSchema = new mongoose.Schema({
    marca: {type: String},
    modelo: {type: String}
})

const Carros = mongoose.model('Carros', CarroSchema)

