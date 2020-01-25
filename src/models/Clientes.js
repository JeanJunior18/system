const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    cliente: {type: String,require: true},
    marca: {type: String,  require: true},
    modelo:{type: String, require: true},
    contato: {type: String, require:true},
    date: {type: Date, default: Date.now()},
    valor: {type:Number, default:0.00},
    observacao: {type: String},
    pagform: {type: String},
    pago: {type: Boolean, default: false}
})

mongoose.model('Cliente',ClienteSchema)