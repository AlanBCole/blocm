const express = require('express');

const app = express();

const blocmOwnerInformation = require("./app/mock-data/blocm-owner-information");
const homePageSections = require('./app/mock-data/home-page-sections');
const blogEntries = require('./app/mock-data/blog-entries');

app.use(express.static('dist'));

app.get('/homepage', (req, res) => {
    console.log('GET /homepage');
    
    const initModel = {
        ...blocmOwnerInformation,
        homePageSections: homePageSections
    };
    
    res.json(initModel);
});

app.get('/blog', (req, res) => {
    console.log('GET /blog');
    res.json(blogEntries);
});

app.listen(8080, () => console.log('app running port 8080'));