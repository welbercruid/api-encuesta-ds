const mongoose = require('mongoose');
const userModel = require('../schemas/user');

const usersLogger = (req, res, next) => {
    console.log("Todo lo que pase por users para por acá");
    next();
}

const validarID = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log(`ID invalido de mongoDB (${id})`);
        return res.status(404).json({msj: "ID inválido"});
    }
    // try {
    //     const user = await userModel.findById(id);
    //     if (!user) {
    //         console.log("ID no encontrado");
    //         return res.status(404).json({msj: "ID no encontrado"})
    //     }
    // } catch (error) {
    //     console.log("Error al buscar el ID en la base de datos");
    //     return res.status(500).json({msj: "Error de servidor"});
    // }
    
    console.log("Middleware validarId");
    next();
}

module.exports = { usersLogger, validarID };