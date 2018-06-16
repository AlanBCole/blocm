import createElement from 'virtual-dom/create-element';
import { initModel } from './model';
import { setSections } from './section-view';

const app = document.getElementById('app');
const nav = document.querySelector('nav');

const contentForMainTag = fetch('./assets/home-page-sections.json')
    .then((response) => response.json()
    .then((data) => initModel.homePageSections = data)
    .then(() => startApp()));

function startApp() {
    if (initModel.isHomePageShown === true) {
        const virtualSections = setSections(nav, initModel.homePageSections);
        const view = createElement(virtualSections);
    
        app.appendChild(view);
        console.log(contentForMainTag);
    } else {
        console.log("no blog yet :[", contentForMainTag);
    }
}
