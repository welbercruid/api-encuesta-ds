const config = require('./config/config');
const express = require('express');
const { dbConnect } = require('./config/mongo');

const app = express();
app.use(express.json());

const encuestaRouter = require('./routes/pregunta');
app.use('/encuesta', encuestaRouter);

const respuestaRouter = require('./routes/respuesta');
app.use('/encuesta', respuestaRouter);

const reportesRouter = require('./routes/reportes');
app.use('/encuesta', reportesRouter);

app.get('/', (req, res) => {
    res.send("Live server")
});

dbConnect();

try {
    app.listen(config.PORT, () => {
        console.log(`Server funcionando en puerto: ${config.PORT}`);
    })
} catch (error) {
    console.error(`El puerto ${config.PORT} está ocupado. Error: ${error}`);
};
