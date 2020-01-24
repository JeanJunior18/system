const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    cliente: {type: String,require: true},
    carro: {type: String,  require: true},
    date: {type: Date, default: Date.now()},
    valor: {type:Number, default:0.00},
    observacao: {type: String},
    pagform: {type: String},
    pago: {type: Boolean, default: false}
})

console.log('Conectado ao model Clientes')
mongoose.model('Cliente',ClienteSchema)