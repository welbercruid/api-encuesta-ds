const respuestaModel = require('../schemas/encuesta');

const addRespuesta = async (req, res) => {
    try {
        const { respuesta, nombre } = req.body;
        const { preguntaId } = req.params;
        const preguntaBuscada = await respuestaModel.findById(preguntaId);
        if (!preguntaBuscada || preguntaBuscada === undefined) {
            return res.status(404).json({
                mensaje: `No se encontró ningún producto con el ID: ${preguntaId}.`
            });
        }

        const existingRespuesta = preguntaBuscada.respuestas.find(r => r.respuesta === respuesta);
        if (existingRespuesta) {
            existingRespuesta.encuestados.push({nombre});
        } else {
            preguntaBuscada.respuestas.push({respuesta, encuestados: [{nombre}]});
        }

        const updateEncuesta = await preguntaBuscada.save();
        //console.log(updateEncuesta);
        res.status(201).json({
            mensaje: "Su respuesta se guardo exitosamente!"
        });
    } catch (error) {
        res.status(500).json("Error al responder.");
    }
}

module.exports = { addRespuesta }