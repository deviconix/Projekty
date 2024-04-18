const express = require('express');
const hbs = require('express-handlebars');

const bodyParser = require('body-parser');

function configureExpress() {
    const app = express();

    // Init handlebars
    app.engine("hbs", hbs.engine({ extname: ".hbs" }));
    app.set("view engine", "hbs");
    // init body-parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    return app;
}

module.exports = configureExpress;