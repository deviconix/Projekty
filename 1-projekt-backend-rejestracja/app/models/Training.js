//const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const mongoose = require("mongoose");
const { Schema } = mongoose;
const trainingSchema = new Schema(
    {
        name: String,
        sornname: String,
        fullname: String,
        training: String, // js, css
        place: String, // online, city
    },
    { timestamps: true }
);


// userSchema.virtual('fullName').get(function () {
//     const strName = `${this.name} ${this.username}`;
//     return strName;
// });

// userSchema.virtual('fullAddress').get(function () {
//     const strAddress = `${this.address.street}, ${this.address.city}, ${this.address.zipcode}`;
//     return strAddress;
// });

// userSchema.plugin(mongooseLeanVirtuals);

//module.exports = mongoose.model('User', userSchema, 'users');
module.exports = mongoose.model('Training', trainingSchema);
// users name in base