
import { startApp } from './app.js';

const app = document.getElementById('app');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const greeting = document.getElementById('greeting');
const greetingPic = document.getElementById('greeting-pic');

var model = {};

window.fetch('/header')
    .then((response) => { 
        console.log("response:", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        model = data;
        greeting.innerText = model.blocmOwnerName + ' ' + model.blocmOwnerBusiness;
        greetingPic.src = model.blocmOwnerImgUrl;
    })
    .then(() => {
        startApp(model, app, nav, 'homepage');
    });


