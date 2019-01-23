import headerView from './header-view';
import homePageView from './home-page-view';
import blogListView from './blog-list-view';

const appNode = document.getElementById('app');

var model = {};

window.fetch('/homepage')
    .then((response) => response.json())
    .then((data) => {
        console.log("homepage json", data);
        model = data;
        
        appNode.parentNode.insertBefore(headerView(updateMainView, model), appNode);
        updateMainView('homepage');
    });

window.location.hash = 'homepage';

function updateMainView(msg) {
    
    switch (msg) {
        
        case 'homepage':
            loadView(homePageView(model));
            break;
            
        case 'blog-list':
            getBlogEntries(model)
            .then(newModel => loadView(blogListView(newModel)));
            break;
            
        default:
            loadView(homePageView(model));
            break;
    }
}

function loadView(newNode) {
    if (appNode.firstChild)
    {
        appNode.replaceChild(newNode, appNode.firstChild);    
    }
    else
    {
        appNode.appendChild(newNode);
    }
}

function getBlogEntries(model) {
    
    return new Promise((resolve, reject) => {
        
        if (!model.blogEntries)
        {
            window.fetch('/blog')
            .then(response => response.json())
            .then(blogEntries => {
                
                const newModel = {
                    ...model,
                    blogEntries: blogEntries
                };
                
                resolve(newModel);
            });    
        }
        
        else
        {
            resolve(model);
        }
    });
}