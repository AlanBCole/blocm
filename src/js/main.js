import { initModel } from './model';
import { setSections } from './section-view';

const app = document.getElementById('app');
const nav = document.querySelector('nav');

const contentForMainTag = fetch('./assets/home-page-sections.json')
    .then((response) => { 
        console.log("response:", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        initModel.homePageSections = data;
    })
    .then(() => {
        startApp();
    });

function startApp() {
    if (initModel.isHomePageShown === true) {
        const view = setSections(nav, initModel.homePageSections);
    
        app.appendChild(view);
        console.log(contentForMainTag);
    } else {
        console.log("no blog yet :[", contentForMainTag);
    }
}
