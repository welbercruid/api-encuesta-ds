const userModel = require('../schemas/user');

const add = async (req, res) => {    
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({msj: "Error al crear un usuario."});
    }
}
const get = async (req, res) => {
    try {
        const {id} = req.params;
        const filter = (id) ? {_id: id} : {};
        const user = await userModel.find(filter, {name: 1, lastname: 1, username: 1, _id: 1});//ocultar pass
        res.status(200).json({Total_de_usuarios: user.length, user});
    } catch (error) {
        res.status(500).json({msj: "Error."})
    }
}

const validateUser = async (req, res) => {    
    try {
        const {username, password} = req.body;
        // console.log(username, "el nick");
        // console.log(req.body, "body");
        const user = await userModel.findOne({username});
        // console.log(user, "el user");
        if (!user) {
            return res.status(400).json({error: "username no encontrado"});
        }
        if (password !== user.password ) {
            return res.status(400).json({ error: "Password incorrecto" });
        }
        res.status(200).json({msj: "Login exitoso"});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error al buscar el nombre de usuario."})
    }
}

module.exports = {add , get, validateUser}