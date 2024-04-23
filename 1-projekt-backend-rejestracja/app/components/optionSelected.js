const optionSelected = {
    name: 'option',
    fn: function (value, data = []) {
        // console.log('----------- option thisValue ---------')
        // console.log(value)
        //console.log('----------- option thisValue end ---------')
        let content = '';
        let check = false;
        data.forEach(item => {
            if (value == item.value) { check = true; } else { check = false; }
            content += `<option value="${item.value}" ${check ? "selected" : ""}>${item.text}</option>`;
        });
        // console.log(content)
        //console.log('----------- option thisValue end ---------')
        return content;
    }
};

module.exports = optionSelected;