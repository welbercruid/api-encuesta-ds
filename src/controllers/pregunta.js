const preguntaModel = require('../schemas/encuesta');

const addPregunta = async (req, res) => {
    try {
        //console.log(req.body, "el req.body");
        const encuesta = new preguntaModel(req.body);
        const savedEncuesta =  await encuesta.save();
        //console.log(savedEncuesta, "modelo encuesta");
        res.status(201).json(savedEncuesta);
    } catch (error) {
        res.status(500).json("Error al crear la pregunta.");
    }
}

const allPreguntas = async (req, res) => {
    try {
        const preguntas = await preguntaModel.find({}, {pregunta: 1});
        //console.log(preguntas, "todas las preguntas");
        res.status(201).json(preguntas);
    } catch (error) {
        res.status(500).json("Error al mostrar las preguntas.");
    }
}

const deletePregunta = async (req, res) => {
    try {
        const { preguntaId } = req.params;
        console.log(preguntaId);
        const preguntaBuscada = await preguntaModel.findById(preguntaId);
        console.log(preguntaBuscada, "id?");
        if (!preguntaBuscada || preguntaBuscada === null) {
            return res.status(404).json({
                mensaje: `No se encontró ningún producto con el ID: ${preguntaId}.`
            });
        }
        await preguntaModel.findByIdAndDelete(preguntaId);
        res.status(200).json(`Se elimino la pregunta con el id: ${preguntaId}`)
    } catch (error) {
        res.status(500).json("Error al buscar.");
    }
}

module.exports = { addPregunta, allPreguntas, /* addRespuesta, */ deletePregunta }