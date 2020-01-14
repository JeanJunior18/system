const express = require('express');


// Iniciando App
const app = express();
app.use(express.json())

// Inciando banco de dados
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false});

// Models
require('./src/models/Products')

// Rotas

const Routes = require('./src/routes')

app.use('/', Routes)


app.listen(3300, console.log('http://localhost:3300'))