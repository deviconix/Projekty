const express = require('express');
const hbs = require('express-handlebars');

function configureExpress() {
    const app = express();

    // Init handlebars
    app.engine("hbs", hbs.engine({ extname: ".hbs" }));
    app.set("view engine", "hbs");

    return app;
}

module.exports = configureExpress;