const config = require('./config/config');
const express = require('express');
const { dbConnect } = require('./config/mongo');
const logger = require('./middlewares/global');

const app = express();
app.use(express.json());
app.use(logger);

const encuestaRouter = require('./routes/pregunta');
app.use('/preguntas', encuestaRouter);

const respuestaRouter = require('./routes/respuesta');
app.use('/respuestas', respuestaRouter);

const reportesRouter = require('./routes/reportes');
app.use('/reportes', reportesRouter);

const tagsRouter = require('./routes/tags');
app.use('/tags', tagsRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

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
