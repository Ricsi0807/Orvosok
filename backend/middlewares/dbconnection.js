const mongoose = require('mongoose');

const mongoDbConnection = async () => {
    try {
        const csatlakozas = await mongoose.connect(process.env.MONGO_URI);
        return csatlakozas;
    }catch(error) {
        console.error(`Valami hiba történt: ${error.message}`);
    }
};

module.exports = mongoDbConnection;