const userModel = require('../schemas/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const register = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({msj: "Error al crear un Usuario."});
    }
}

const login = async (req, res) => {    
    try {
        const {username, password} = req.body;
        const user = await userModel.findByCredentials(username, password)
        /* console.log(username, "el nick");
        console.log(req.body, "body");
        const user = await userModel.findOne({username: username}).select('+password');
        console.log(user, "el user");
        if (!user) return res.status(400).json({error: "username no encontrado"}); */
    
        // if (password !== user.password ) {
        //     return res.status(400).json({ error: "Password incorrecto" });
        // }
        //const match = await bcrypt.compare(password, user.password);
        /* const match = await user.comparePassword(password)
        console.log("el match: ", match);
        console.log("el pass: ", password);
        console.log("el user.password: ", user.password);
        if (!match) return res.status(400).json({ error: "Password incorrecto" }); */

        const token = jwt.sign(
            { username: user.username, id: user._id },
            config.TOKEN_SECRET
        );
        res.status(200).json({msj: "Login exitoso", token});
    } catch (error) {
        console.error(error);
        //res.status(500).json({error: "Error al loguear."})
        res.status(401).json({error: error.message})
    }
}

module.exports = { register, login }