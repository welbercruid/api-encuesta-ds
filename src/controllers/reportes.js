const encuestaModel = require('../schemas/encuesta');

const reports = async (req, res) => {
    try {
        const results = await encuestaModel.aggregate([    
        { $unwind: "$respuestas" },
        //agrupo por campos de pregunta y respuesta y cuento el número de encuestados
        { $group: {
            _id: { pregunta: "$pregunta", respuesta: "$respuestas.respuesta" },
            count: { $sum: { $size: "$respuestas.encuestados" } }
            }
        },
        //ordeno de mayor a menor
        { $sort: { count: -1 } },
        //agrupo por campo de pregunta y creo un array con las respuestas y cant de resp.
        { $group: {
            _id: "$_id.pregunta",
            respuestas: { $push: { respuesta: "$_id.respuesta", count: "$count" }}
            }
        },
        //proyecto los nombres  mostrar
        // { $project: {
        //     _id: 0,
        //     pregunta: "$_id",
        //     respuestas: 1
        //   }
        // },
        ]);
        res.status(200).json(results);
        } catch (error) {
        res.status(500).json({msj: "Error al generar el reporte."});
    }
}

module.exports = { reports }
