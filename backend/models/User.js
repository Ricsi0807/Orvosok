const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        jelszo: {
            type: String, // Jelszónak inkább String típust használj
            required: true,
        },
        admin: { 
            type: Boolean, 
            default: false // Alapértelmezett érték false a regisztrációnál
        }
    },
    {
        timestamps: true,
    }
);
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
