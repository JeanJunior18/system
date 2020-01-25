const mongoose = require('mongoose')

const EncerradoSchema = new mongoose.Schema({
    cliente: {type: String,require: true},
    carro: {type: String,  require: true},
    date: {type: Date},
    valor: {type:Number, default:0.00},
    observacao: {type: String},
    pagform: {type: String},
    pago: {type: Boolean, default: false},
    datefim: {type:Date, default:Date.now()}
})

mongoose.model('Encerrados',EncerradoSchema)