const express = require('express');
const parser = require('body-parser');

const app = express();

const mockModel = require("./app/mock-data/model");
const mockHomePage = require('./app/mock-data/home-page-sections');
const mockBlogPage = require('./app/mock-data/blog-entries');

app.use(express.static('dist'));

app.get('/header', (req, res) => {
    console.log('GET /');
    res.json(mockModel);
});

app.get('/homepage', (req, res) => {
    console.log('GET /homepage');
    res.json(mockModel);
});

app.get('/blog', (req, res) => {
    console.log('GET /blog');
    res.send(mockBlogPage);
});

app.listen(8080, () => console.log('app running port 8080'));