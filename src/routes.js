const express = require('express');

const router = express.Router();
const Product = require('./controllers/ProductController');
router.get('/products', Product.index);
router.get('/products/:id', Product.show);
router.post('/products', Product.store);
router.put('/products/:id', Product.update);
router.delete('/products/:id', Product.destroy);

module.exports = router