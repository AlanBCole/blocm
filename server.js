const express = require('express');
const parser = require('body-parser');

const app = express();
const mockHomePage = require('./app/mock-data/home-page-sections');
app.use(express.static('dist'));

app.get('/homepage', (req, res) => {
    console.log('GET /homepage')
    res.json(mockHomePage);
})

app.get('/blog', (req, res) => {
    console.log('GET /blog');
    res.send('No blog yet :{');
})

app.listen(8080, () => console.log('app running port 8080'));