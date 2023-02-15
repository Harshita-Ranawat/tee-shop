
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
    console.log(req.body);
    const { password, username, email } = req.body;
    if (!password) {
        return res.redirect('/home');
    }
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        email,
        password: hash
    })
    await user.save();
    res.redirect('/home');
})

app.post('/login', async (req, res) => {
    console.log('hello');
    const { username, password } = req.body;
    console.log(req.body)
    const user = await User.findOne({ username });
    console.log(user)
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        res.redirect('/home');
        console.log("Succesfully logged in ");
    }
    else {
        res.redirect("/home");
    }

})

app.listen(port, () => { console.log(`The application started successfully on port ${port}`) })


