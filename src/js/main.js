import createHeader from './header-view';
import homePageView from './home-page-view';
import blogListView from './blog-list-view';

const appNode = document.getElementById('app');
// const header = document.querySelector('header');
// const nav = document.querySelector('nav');
// const greeting = document.getElementById('greeting');
// const greetingPic = document.getElementById('greeting-pic');

var model = {};

window.fetch('/homepage')
    .then((response) => response.json())
    .then((data) => {
        console.log("homepage json", data);
        model = data;
        appNode.appendChild(createHeader(seeBlogOrNot, model));
        // appNode.appendChild(homePageView(model));
    })
    .then(() => appNode.appendChild(homePageView(model)));


function seeBlogOrNot(msg) {
    const main = document.querySelector('main');
    switch (msg) {
        case 'homepage':
            if (main) {
                appNode.removeChild(main);
            }
            appNode.appendChild(homePageView(model));
            break;
        case 'blog-list':
            if (main) {
                appNode.removeChild(main);
            }
            appNode.appendChild(blogListView(model));
            break;
        default:
            if (main) {
                appNode.removeChild(main);
            }
            appNode.appendChild(homePageView(model));
            break;
    }
        
}