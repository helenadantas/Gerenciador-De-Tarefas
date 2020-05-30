const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const TarefaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    //Falta definir como sendo apenas alta ou baixa.
    prioridade: {
        type: String,
        required: true
    },
});

TarefaSchema.plugin(mongoosePaginate);
mongoose.model('Tarefa', TarefaSchema);