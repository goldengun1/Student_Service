//XDDDD
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// XDDDDD
//NOVA
//ggggggggggggg
/kkk
//neka izmena
mongoose.connect("mongodb://127.0.0.1:27017/Prodavnica", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const artikalRoutes = require('./routes/artikal');
const porudzbinaRoutes = require('./routes/porudzbina');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/artikal', artikalRoutes);
app.use('/porudzbina', porudzbinaRoutes);

app.use(function (req, res, next) {
    const err = new Error('Pokušali ste da učitate stranicu koja ne postoji: ' + req.url);
    err.status = 404;

    next(err);
});

app.use(function (error, req, res, next) {
    console.error(error.stack);

    const statusCode = error.status || 500;
    res.status(statusCode).render('error.ejs', {
        errorMessage: error.message,
        errorCode: statusCode
    });
});

module.exports = app;