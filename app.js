const express = require('express');
const fs = require('fs');

const app = express();
app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRouter = require('./routes/main')
app.use('/', mainRouter)

const mainHeroes = require('./routes/heroes')
app.use('/', mainHeroes)

const mainCreditos = require('./routes/creditos')
app.use('/', mainCreditos)

app.use(function (req, res, next) {
    res.status(404);
    res.send('404 not found. <br> ¡Houston, poseemos problemas!');
    });