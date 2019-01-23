import { el } from './make-html';

function setGreeting (dispatch, title) {
    const link = el(
        'a', 
        { 
            id: 'title-link',
            href: '#homepage',
            onclick: () => dispatch('homepage')
        },
        title
    );
    
    return el('h1', { id: 'greeting' },'', [link]);
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

export default function headerView(dispatch, model) {
    const title = model.blocmOwnerName + ' ' + model.blocmOwnerBusiness;
    
    return el(
        'header', 
        {}, 
        '', 
        [
            setGreeting(dispatch, title), 
            createNavBar(dispatch, model)
        ]
    );
}