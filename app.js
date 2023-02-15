
const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();
const User = require('./models/user');
const bcrypt = require('bcrypt');
const port = 80;
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static('static'))


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("mongo connection open!!")
    })
    .
    catch(err => {
        console.log("connection error!!")
        console.log(err)
    })
mongoose.set('strictQuery', true);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => {

    const params = {}
    res.status(200).render('index.pug', params)
})

app.get('/home', (req, res) => {


    res.render('index.pug')
})

app.get('/about', (req, res) => {

    const params = {}
    res.status(200).render('about.pug', params)
})

app.post('/register', async (req, res) => {
    console.log('hello');
    console.log(req.body);
    const { password, username } = req.body;
    if (!password) {
        return res.redirect('/home');
    }
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    console.log(req.body);
    console.log(password);
    console.log(username);
    res.redirect('/home');
})

app.post('/login', async (req, res) => {
    console.log('hello');
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        res.redirect('/about');
        alert("Succesfully logged in ");
    }
    else {
        alert("Try Again");
    }

})

app.listen(port, () => { console.log(`The application started successfully on port ${port}`) })


