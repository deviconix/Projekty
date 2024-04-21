//const hbs = require('express-handlebars');
// call in expressService.js
const title = require('../components/title');
const option = require('../components/optionSelected');

function initComponents(hbs) {
    //hbs.registerHelper(list.name, list.fn);
    hbs.handlebars.registerHelper(title.name, title.fn);
    hbs.handlebars.registerHelper(option.name, option.fn);
}

module.exports = initComponents;