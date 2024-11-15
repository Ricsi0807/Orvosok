const express = require('express');
const pasth = require('path');
// Jelszó védő?
const bcrypt = require('bcrypt');
const collections = require('./config');


const app = express();
// Konvertálás json-be
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Ejs engine használata
app.set('view engine', 'ejs');
//Statikus fálj használata
app.use(express.static("public"));
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
            res.render("../index.html")
        }else{
            res.send("Hibás adatok")
        }
    } catch {
        res.send("Hibás adatok!")
    }
})

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})