const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    lastname: {type: String, required: true, minlength: 2},
    username: {type: String, /* lowercase: true,  */required: true, minlength: 3, index: {unique: true/* , uniqueCaseInsensitive: true */}},
    password: {type: String, select: false, required: true, minlength: 6}
}, { timestamps: true }
);

userSchema.pre('save', async function(next) {
    let user = this;
    //evita que se vuelva a hashear la contraseña cada vez que se actualiza el usuario
    if (!user.isModified('password')) return next();
    //console.log("user de userschema: ", user);
    //console.log("user.pass: ", user.password)
    const salt = await bcrypt.genSalt(parseInt(config.SALT));
    const passwordHashed = await bcrypt.hash(user.password, salt);
    //console.log("passwordHashed", passwordHashed);
    user.password = passwordHashed;
    //console.log("pass hashed: ", user.password)
    next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}
// userSchema.methods.updatePassword = async function (newPassword) {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);
//     this.password = hashedPassword;
//     await this.save();
// };
userSchema.statics.findByCredentials = async function (username, password) {
    const user = await this.findOne({ username }).select('_id username password');
    if (!user) {
      throw new Error('Nombre de usuario no encontrado');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Contraseña incorrecta');
    }
    return user;
};

userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    delete obj.__v
    return obj;
}  
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;