const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente')
const Terminate = mongoose.model('Encerrados')

module.exports = {
    async NewCliente(req,res){
        const clientes = {
            cliente: req.body.cliente,
            contato:req.body.contato,
            marca: req.body.marca,
            modelo: req.body.modelo,
            observacao: req.body.observacao,
            valor: req.body.valor,
            pagform: req.body.pagform,
        }
        new Cliente(clientes).save().then(console.log('Serviço adicionado'))
        return res.redirect('/')
    },

    async addNewCliente(req,res){
        const all = await Terminate.find()
        return res.render('home/new',{all:all})
    },

    async ShowCliente(req,res){
        const clientes = await Cliente.find()
        return res.render('home/home',{clientes:clientes})
    },

    async EncServ(req,res){
        const service = await Cliente.findById(req.params.id)
        
        console.log('Serviço encerrado')
        const encerrado = {
            cliente: service.cliente,
            contato:service.contato,
            carro: service.carro,
            valor: service.valor,
            observacao: service.observacao,
            pagform: service.pagform,
        }
        new Terminate(encerrado).save()
        await Cliente.findByIdAndRemove(req.params.id)
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