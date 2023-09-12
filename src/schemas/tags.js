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
