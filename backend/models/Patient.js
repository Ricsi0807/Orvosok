// models/Patient.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
});
const Patient = mongoose.model('patient', patientSchema);
module.exports = Patient;
