const express = require('express');

const router = express.Router();
// const Product = require('./controllers/ProductController');
// router.get('/products', Product.index);
// router.get('/products/:id', Product.show);
// router.post('/products', Product.store);
// router.put('/products/:id', Product.update);
// router.delete('/products/:id', Product.destroy);

const Cliente = require('./controllers/ClienteController')
router.get('/', Cliente.ShowCliente)
router.get('/new', (req,res)=>{return res.render('home/new')})
router.post('/createpost', Cliente.NewCliente)
router.get('/delete/:id', Cliente.EncServ)
router.get('/update/:id', Cliente.UpdateServ)
router.post('/updating/:id', Cliente.UpdatePost)

module.exports = router