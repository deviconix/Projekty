const title = {
    name: 'title',
    fn: function (value) {
        console.log('----------- thisValue ---------')
        console.log(value)
        console.log('----------- thisValue end ---------')
        return `<h1>${value}</h1>`;
    }
};

module.exports = title;