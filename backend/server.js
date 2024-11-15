require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoDbConnection = require('./middlewares/dbconnection');
const bcrypt = require('bcrypt');
const collections = require('./config');
const cors = require('cors');
const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.render('login');
});
// Regisztrálás használata
app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    }
    // Van e már olyan felhasználó
    const existingUser = await collections.findOne({ name: req.body.username });
    if (existingUser) {
            res.send("A felhasználónév már létezik")
        }else{
            // Jelszó titkosítás
            const saltRounds = 10; // Milyen hosszú legyen karakterenként(nem tudom mennyi a max de a 10 jó lesz)
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword; //Itt cseréli ki a jelszót
            const userdata = await collections.insertMany(data);
            console.log(userdata);
            res.render("login")
        }
});

app.post('/login', async (req, res) => {
    try {
        const check = await collections.findOne({name: req.body.username});
        if(!check){
            res.send("Hibás adatok")
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch){
            res.render("home")
        }else{
            res.send("Hibás adatok")
        }
    } catch {
        res.send("Hibás adatok!")
    }
})

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
//Időpontok
app.use('/api/hospital/appointment', require('./routes/appointmentRoutes.js'));
app.use('/api/hospital/appointments', require('./routes/idopontokRoutes.js'));
app.use('/api/hospital/appointments/add', require('./routes/addIdopontRoutes.js'));
app.use('/api/hospital/appointments/delete', require('./routes/torIdopontRoutes.js'));
app.use('/api/hospital/appointments/update', require('./routes/upIdopontRoutes.js'));
app.use('/api/hospital/idopontok', require('./routes/appointmentCardRoutes.js'));
// Orvosok
app.use('/api/hospital/doctors', require('./routes/doctorsRoutes.js'));
app.use('/api/hospital/orvosok', require('./routes/orvosokRoutes.js'));
// app.use('/api/hospital/appointments/add', require('./routes/addIdopontRoutes.js'));
// Páciensek betegek
app.use('/api/hospital/patient', require('./routes/patientRoutes.js'));
app.use('/api/hospital/patients', require('./routes/paciensRoutes.js'));
// Egyedi
app.use('/api/hospital/egyedi', require('./routes/egyediOrvosRoutes.js'));
// Users
app.use('/api/hospital/users', require('./routes/usersRoutes.js'));

