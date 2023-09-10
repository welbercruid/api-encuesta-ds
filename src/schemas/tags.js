const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
}, { timestamps: true });

tagSchema.set('toJSON', {
    transform: function (doc, ret) {
        // Excluir los campos created_at y updated_at del resultado JSON
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
    }
});

const tagModel = mongoose.model('Tag', tagSchema);

module.exports = tagModel;
//"Mercurio", "Venus", "Tierra", "Jupiter", "Saturno", "Urano", "Neptuno", "Marte", "Plutón"
// [
//     {"_id": "64fdcc2ca259dee383eea2f1"},//Mercurio
//     {"_id": "64fdcd52cf0b3932d7e96a9d"},//Venus"},
//     {"_id": "64fdcd7dcf0b3932d7e96a9f"},//Tierra"}
//     {"_id": "64fdcda5cf0b3932d7e96aa3"},//Jupiter"
//     {"_id": "64fdcdbdcf0b3932d7e96aa5"},//Saturno"
//     {"_id": "64fdcdcecf0b3932d7e96aa7"},//Urano"},
//     {"_id": "64fdcde8cf0b3932d7e96aa9"},//Neptuno"
//     {"_id": "64fdd01d1908d05c83282186"},//Marte"},
//     {"_id": "64fdd0e71908d05c83282188"}//Plutón"} 
// ]