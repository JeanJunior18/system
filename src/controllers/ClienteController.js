const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente')

module.exports = {
    async NewCliente(req,res){
        const clientes = {
            cliente: req.body.cliente,
            carro: req.body.carro,
            valor: req.body.valor,
            observacao: req.body.observacao,
            pagform: req.body.pagform,
        }
        new Cliente(clientes).save().then(console.log('Serviço adicionado'))
        return res.redirect('/')
    },
    async ShowCliente(req,res){
        const clientes = await Cliente.find()
        return res.render('home/home',{clientes:clientes})
    },
    async EncServ(req,res){
        await Cliente.findByIdAndRemove(req.params.id)
        console.log('Serviço encerrado')
        return res.redirect('/')
    },
    async UpdateServ(req,res){
        const cliente = await Cliente.findById(req.params.id)
        return res.render('home/update',{cliente:cliente})
    },
    async UpdatePost(req,res){
        const product = await Cliente.findByIdAndUpdate(req.params.id,{
            cliente: req.body.cliente,
            carro: req.body.carro,
            valor: req.body.valor,
            observacao: req.body.observacao,
            pagform: req.body.pagform,
        }, {new:true})
        return res.redirect('/')
    }
}