const userModel = require('../schemas/user');
//const bcrypt = require('bcrypt');
// const add = async (req, res) => {    
//     try {
//         const newUser = new userModel(req.body);
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(500).json({msj: "Error al crear un usuario."});
//     }
// }
//mostrar todos o buscar por id
const get = async (req, res) => {
    try {
        const {id} = req.params;
        const filter = (id) ? {_id: id} : {};   
        const user = await userModel.find(filter/* , {name: 1, lastname: 1, username: 1, _id: 1} */);//ocultar pass
        res.status(200).json({Total_de_usuarios: user.length, user});
    } catch (error) {
        res.status(500).json({msj: "Error al mostrar usuarios."})
    }
}
const profile = async (req, res) => {
    try { 
        const user = await userModel.findOne({_id: req.user.id});
        res.status(200).json({msj: "Mi perfil", user});
    } catch (error) {
        res.status(500).json({msj: "Error al mostrar usuarios."})
    }
}
// const login = async (req, res) => {    
//     try {
//         const {username, password} = req.body;
//         console.log(username, "el nick");
//         console.log(req.body, "body");
//         const user = await userModel.findOne({username})//.select('+password');
//         console.log(user, "el user");
//         if (!user) {
//             return res.status(400).json({error: "username no encontrado"});
//         }
//         // if (password !== user.password ) {
//         //     return res.status(400).json({ error: "Password incorrecto" });
//         // }
//         const match = await bcrypt.compare(password, user.password);
//         console.log("el match: ", match);
//         console.log("el pass: ", password);
//         console.log("el user.password: ", user.password);
//         if (!match) {
//             return res.status(400).json({ error: "Password incorrecto" });
//         }
//         res.status(200).json({msj: "Login exitoso"});
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({error: "Error al loguear."})
//     }
// }

module.exports = {/* add ,  */get, profile/*  login */}