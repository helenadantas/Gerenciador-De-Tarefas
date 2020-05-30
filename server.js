const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors())

// Iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/gerenciadorDeTarefas', { useUnifiedTopology: true, useNewUrlParser: true});
requireDir('./src/models')


// Primeira rota
app.use('/api', require("./src/rotas"))

app.listen(3001);