const config = require('./config/config');
const express = require('express');
const { dbConnect } = require('./config/mongo');

const app = express();
app.use(express.json());

const encuestaRouter = require('./routes/pregunta');
app.use('/preguntas', encuestaRouter);

const respuestaRouter = require('./routes/respuesta');
app.use('/respuestas', respuestaRouter);

const reportesRouter = require('./routes/reportes');
app.use('/reportes', reportesRouter);

const tagsRouter = require('./routes/tags');
app.use('/tags', tagsRouter);

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
