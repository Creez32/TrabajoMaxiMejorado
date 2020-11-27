const express = require('express');
const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRouter = require('./routes/main')
app.use('/', mainRouter)

const mainHeroes = require('./routes/heroes')
app.use('/heroes', mainHeroes)

app.use(function (req, res,) {
    res.status(404);
    res.send('404 not found. <br> ¡Houston, poseemos problemas!');
    });