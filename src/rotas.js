const express = require('express');
const routes = express.Router();

const TarefaController = require('./controllers/TarefaController')

routes.get('/tarefas', TarefaController.index)
routes.get('/tarefas/:id', TarefaController.mostraTarefa)
routes.post('/tarefas', TarefaController.criaTarefa)
routes.put('/tarefas/:id', TarefaController.atualiza)
routes.delete('/tarefas/:id', TarefaController.apagaTarefa)


module.exports = routes;