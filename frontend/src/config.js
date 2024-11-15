const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://asd:asd@teszt.63nge.mongodb.net/")

connect.then(() => {
    console.log('Connected to MongoDB')
}).catch(() => {
    console.error('Failed to connect to MongoDB')
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("user", LoginSchema);

module.exports = collection;