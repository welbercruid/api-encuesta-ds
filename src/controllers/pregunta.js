const preguntaModel = require('../schemas/encuesta');
const tagModel = require('../schemas/tags');

const add = async (req, res) => {
    try {
        //console.log(req.body, "el req.body");
        const encuesta = new preguntaModel(req.body);
        const savedEncuesta =  await encuesta.save();
        //console.log(savedEncuesta, "modelo encuesta");
        res.status(201).json(savedEncuesta);
    } catch (error) {
        res.status(500).json({msj: "Error al crear la pregunta."});
    }
}
//mostrar todos o buscar por id
const get = async (req, res) => {
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
        res.status(500).json({msj: "Error al mostrar las preguntas."});
    }
}

const del = async (req, res) => {
    try {
        const { preguntaId } = req.params;
        console.log(preguntaId);
        const preguntaBuscada = await preguntaModel.findById(preguntaId);
        console.log(preguntaBuscada, "id?");
        if (!preguntaBuscada || preguntaBuscada === null) {
            return res.status(404).json({
                msj: `No se encontró ningún pregunta con el ID: ${preguntaId}.`
            });
        }
        await preguntaModel.findByIdAndDelete(preguntaId);
        res.status(200).json(`Se elimino la pregunta con el id: ${preguntaId}`)
    } catch (error) {
        res.status(500).json({msj: "Error al querer eliminar."});
    }
}

module.exports = { add, get, del }