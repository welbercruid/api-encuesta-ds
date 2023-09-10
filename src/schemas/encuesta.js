const mongoose = require('mongoose');

const encuestaSchema = new mongoose.Schema({
    pregunta: String,//que color preferís?
    respuestas: [{
        respuesta: String,                
        encuestados: [{ nombre: String }]
    }],
    //hace referencia a un documento de otra colección
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag', }],//hace referencia al modelo de 'Tags'
}, { timestamps: true }
);
   
const encuestaModel = mongoose.model('encuestas', encuestaSchema);

module.exports = encuestaModel;