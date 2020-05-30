const mongoose = require('mongoose');

const Tarefa = mongoose.model('Tarefa')

module.exports = {
    async index(req, res) {
        const {page = 1}= req.query
        const tarefas = await Tarefa.paginate({}, {page, limit: 10});

        return res.json(tarefas)
    },

    async mostraTarefa(req, res) {
        const tarefa = await Tarefa.findById(req.params.id);
        return res.json(tarefa)
    },

    async criaTarefa(req, res) {
        const tarefa = await Tarefa.create(req.body);
 
        return res.json(tarefa)
    },

    async atualiza(req, res) {
        const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(tarefa)
    },

    async apagaTarefa(req, res) {
        await Tarefa.findByIdAndDelete(req.params.id);

        return res.send();

    }
}