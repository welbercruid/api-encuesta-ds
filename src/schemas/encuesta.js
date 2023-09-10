const mongoose = require('mongoose');

const encuestaSchema = new mongoose.Schema({
    pregunta: String,//que color preferís?
    respuestas: [{
        respuesta: String,                
        encuestados: [{ nombre: String }]
                    //respuesta: { type: mongoose.Schema.Types.ObjectId, ref: "Respuesta"}
    }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tags', }],//hace referencia al modelo de tags(categorías)
}, { timestamps: true }
);
   
const encuestaModel = mongoose.model('encuestas', encuestaSchema);

module.exports = encuestaModel;