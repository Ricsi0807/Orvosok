const mongoose = require('mongoose');

const orvosSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: true,
        },
        kor: {
            type: Number,
            required: true,
        },
        szak: {
            type: String,
            required: true,
        },
        idopontok: {
            type: [Date],
            required: true,
        },
        isEditMode: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);
const OrvosModel = mongoose.model('doctor', orvosSchema);

module.exports = OrvosModel;
