const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        name: String,
        username: String,
        email: String,
        website: String,
        address: {
            street: String,
            suite: String,
            city: String,
            zipcode: String,
        },
        geo: {
            lat: String,
            lng: String
        }
    },
    { timestamps: true }
);


userSchema.virtual('fullName').get(function () {
    const strName = `${this.name} ${this.username}`;
    return strName;
});

userSchema.virtual('fullAddress').get(function () {
    const strAddress = `${this.address.street}, ${this.address.city}, ${this.address.zipcode}`;
    return strAddress;
});

userSchema.plugin(mongooseLeanVirtuals);

module.exports = mongoose.model('User', userSchema, 'users');
// users name in base