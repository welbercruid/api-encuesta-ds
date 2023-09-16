//const mongoose = require('mongoose');

const authLogger = (req, res, next) => {
    console.log("Todo lo que pase por auth pasa por acá.");
    next();
};

// const validarID = (req, res, next) => {
//     const id = req.params.id;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         console.log(`ID invalido de mongoDB (${id})`);
//         return res.status(404).json({msj: "ID inválido"})
//     }
//     console.log("Middleware validarId");
//     next();
// }

const validarData = (req, res, next) => {
    const { name, lastname, username, password, ... extraProp} = req.body;
    if (!name || !lastname || !username || !password) {
        console.log(`Falta data (${req.body})`);
        return res.status(404).json({
            msj: "No ingresaste toda la data necesaria."
        });
    }
    if (Object.keys(extraProp).length > 0) {
        return res.status(404).json({
            msj: "No se pueden agregar otra data."
        });
    }
    console.log("middleware validarData");
    next();
}
module.exports = { authLogger, /* validarID, */ validarData }