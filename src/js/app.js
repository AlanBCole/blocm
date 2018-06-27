import { homePageView } from './home-page-view';
import { setBlogNavLink } from './header-view';

export function startApp(model, appNode, navNode, msg) {
    if (msg === "homepage") {
        if (!model.homePageSections) {
            window.fetch('/' + msg)
                .then((res) => res.json())
                .then((data) => model.homePageSections = data)
                .then(() => {
                    showHomePage(startApp, model, appNode, navNode);
                    
                    if (model.isBlog) {
                        setBlogNavLink(navNode);
                    }
                    
                    console.log("You should see the homepage stuff now.");
                });
        } else {
            showHomePage(startApp, model, appNode, navNode);
            console.log("You should see the homepage stuff AGAIN.");
        }
        
    } else if (msg === "blog") {
        
        if (!model.blogEntries) {
            window.fetch('/' + msg)
                .then((res) => res.json())
                .then((data) => model.blogEntries = data)
                .then(() => console.log(msg + "was called!", model.blogEntries));
        } else {
            console.log(msg + " was called!", model.blogEntries);
        }
        
    }
    
    function eventHandler(msg) {
        
    }
}

function showHomePage(eventHandler, model, appNode, navNode) {
    const { homePageSections } = model; 
    const view = homePageView(eventHandler, navNode, homePageSections);
    appNode.appendChild(view);
}


// import { h, diff, patch } from 'virtual-dom';
// import createElement from 'virtual-dom/create-element';

// function app(initModel, update, view, node) {
//   let model = initModel;
//   let currentView = view(dispatch, model);
//   let rootNode = createElement(currentView);
//   node.appendChild(rootNode);
//   function dispatch(msg){
//     model = update(msg, model);
//     const updatedView = view(dispatch, model);
//     const patches = diff(currentView, updatedView);
//     rootNode = patch(rootNode, patches);
//     currentView = updatedView;
//   }
// }

// export default app;