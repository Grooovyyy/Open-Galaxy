const { number } = require("yup");
const {Schema, model} = require("../connection")

const myschema = new Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
});

module.exports = model("Contact", myschema)