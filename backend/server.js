require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoDbConnection = require('./middlewares/dbconnection');

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoDbConnection()
    .then(() => {
        console.log("Sikeres csatlakozás");

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api/hospital`);
        });
    }).catch((error) => {
        console.log(`Valami szar van ${error.message}`);
    });

app.use('/api/hospital', require('./routes/mainRoutes.js'));
app.use('/api/hospital/doctors', require('./routes/orvosokRoutes.js'));
app.use('/api/hospital/egyedi', require('./routes/egyediOrvosRoutes.js'));
app.use('/api/hospital/idopontok', require('./routes/appointmentCardRoutes.js'));


