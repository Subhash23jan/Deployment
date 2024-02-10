const express = require('express');
const path = require('path'); // Import the path module
const http = require('http');
const mongoose = require('mongoose');

const DB = 'mongodb+srv://xxxxxxxx@cluster0.wgtypza.mongodb.net/?retryWrites=true&w=majority';
console.log("subhash");
const app = express();
app.use(express.static('src'));
const PORT = 3000;
app.set("connection", "close");
app.use(express.json());
app.use(express.static(__dirname + '/src'));
app.listen(PORT, () => {
    console.log('connection is successful');
});

// Use path.join() to get the absolute path to index.html
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/home', (req, res) => {
    return res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/styles.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname,'styles.css'));
});
app.get('/index.js', (req, res) => {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, 'index.js'));
});
app.get('/my_image', (req, res) => {
    res.set('Content-Type', 'image/jpeg');
    res.sendFile(path.join(__dirname, 'my_image.jpg'));
});