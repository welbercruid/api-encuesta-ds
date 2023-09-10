const mongoose  = require('mongoose');
const config = require('./config'); //llamo a dotenv

const dbConnect = () => {
    mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => console.log("--- MongoDB ATLAS CONECTADO ---"))
    .catch(err => console.log("ERROR de conexión", err));
};

module.exports = { dbConnect }