const express = require('express');
const hbs = require('express-handlebars');

const bodyParser = require('body-parser');

const session = require('express-session');

function configureExpress() {
    const app = express();


    // hbs helper
    const hbsh = hbs.create({}); // ??
    // Регистрация хелпера addOne
    hbsh.handlebars.registerHelper('indexInc', function (value) {
        return value + 1;
    });
    // Init handlebars
    app.engine("hbs", hbs.engine({ extname: ".hbs" }));
    app.set("view engine", "hbs");
    // init body-parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // session
    // Устанавливаем промежуточное программное обеспечение для сессий
    // app.use(session({
    //     secret: 'your-secret-key-1', // Секретный ключ для подписания сессионных куков
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: {
    //         secure: true
    //     }
    // }));

    app.use(session({
        secret: 'mySecretKey', // Секретный ключ для подписи куки
        resave: false, // Не сохранять сессию, если она не изменилась
        saveUninitialized: true, // Сохранять сессию, даже если она не инициализирована
    }));

    return app;
}

module.exports = configureExpress;