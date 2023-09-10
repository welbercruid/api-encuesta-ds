const encuestaModel = require('../schemas/encuesta');
const tagModel = require('../schemas/tags');

const add = async (req, res) => {
    try {
        const tag = new tagModel(req.body);
        const savedTag = await tag.save();
        res.status(201).json(savedTag);
    } catch (error) {
       res.status(500).json("Error al crear el tag"); 
    }
}

const get = async (req, res) => {
    try {
        const {id} = req.params;
        const filter = (id) ? {_id: id} : { };
        tags = await tagModel.find(filter);
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json("Error al mostrar tag"); 
    }
}

// const search = async (req, res) => {
//     try {
//         const {nombre} = req.params;
//         const tag = await tagModel.findOne({nombre: nombre});
//         if (!tag) {
//             return res.status(404).json({
//                 mensaje: `No se encontró el tag: ${nombre}.`
//             });
//         }
//         const preguntas = await encuestaModel.find({tag: {$in: [tag._id]}}).populate('tag');
//         console.log(preguntas, "por search");
//         res.status(200).json(preguntas);
//     } catch (error) {
//         res.status(500).json("Error al buscar.");
//     }    
// }
const search = async (req, res) => {
    try {
        const {nombre} = req.params;
        console.log(nombre, "NOMBRE");
        const tag = await tagModel.findOne({nombre: nombre});
        console.log(tag, "TAG");
        if (!tag) {
            return res.status(404).json({
                mensaje: `No se encontró ningún tag con el nombre: ${nombre}.`
            });
        }
        const preguntas = await encuestaModel.find({tag: {$in: [tag._id]}}, {pregunta: 1, _id: 1, tag: 1}).populate('tag');
        res.status(200).json(preguntas);
    } catch (error) {
        res.status(500).json("Error al buscar.");
    }    
}

module.exports = { add, get, search }