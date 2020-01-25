const mongoose = require('mongoose')

const Terminate = mongoose.model('Encerrados')

module.exports = {
    async ShowAll(req,res){
        const all = await Terminate.find()
        return res.render('home/finalizados',{all:all})
    },
}