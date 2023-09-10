const preguntaModel = require('../schemas/encuesta');
const tagModel = require('../schemas/tags');
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

const getPreguntas = async (req, res) => {
    try {
        const {id} = req.params;
        const filter = (id) ? {_id: id} : { };
        const preguntas = await preguntaModel.find(filter, {pregunta: 1}).populate('tag');//el 1 para que imprima solo la pregunta y su id
        //console.log(preguntas, "todas las preguntas");
        if (req.query.tags) {
            const tags = req.query.tags.split(',');
            preguntas = await preguntaModel.find({tags: {$in: tags}}, {pregunta: 1}.populate('tag'));
        }
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
                mensaje: `No se encontró ningún pregunta con el ID: ${preguntaId}.`
            });
        }
        await preguntaModel.findByIdAndDelete(preguntaId);
        res.status(200).json(`Se elimino la pregunta con el id: ${preguntaId}`)
    } catch (error) {
        res.status(500).json("Error al buscar.");
    }
}

module.exports = { addPregunta, getPreguntas, deletePregunta }