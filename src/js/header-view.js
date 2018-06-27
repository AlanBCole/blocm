import { el } from './make-html';

function setGreeting (title) {
    return el('h3', { id: 'greeting' }, title);
}

function setHomePageLinks(dispatch, sections) {
    const links = sections.map((section) => {
        return el('a',
        { 
            href: '#' + section.title,
            onclick: function() { dispatch('homepage') },
        },
        section.title);    
    });
    
    return links;
}

function setBlogNavLink(dispatch) {
    return el('a', {
            href: '#blog',
            onclick: function() { dispatch('blog-list') },
            id: 'blog-link'
        },
        'Blog'
    );
}

function createNavBar (dispatch, model) {
    return el('nav', {}, '', [...
            setHomePageLinks(dispatch, model.homePageSections),
            setBlogNavLink(dispatch)
        ]);
}

export default function createHeader(dispatch, model) {
    const title = model.blocmOwnerName + model.blocmOwnerBusiness;
    return el('header', {}, '', [setGreeting(title), createNavBar(dispatch, model)]);
}