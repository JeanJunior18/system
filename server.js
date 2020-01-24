const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');


// Iniciando App
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')));

// Inciando banco de dados
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false});

// Models
// require('./src/models/Products'),
require('./src/models/Clientes')
// Handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Rotas

const Routes = require('./src/routes')

app.use('/', Routes)


app.listen(3301, console.log('http://localhost:3301'))