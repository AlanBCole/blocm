import { el, getHtmlText } from './make-html';
import { startApp } from './app';

function setTitle(title) {
    return el('h2', {}, title);
}

function setTitleDiv(section) {
    return el('div', {
            class: 'title-div',
        },
        '',
        [
            setTitle(section.title),
        ]
    );
}

function setTextDiv(section) {
    const htmlText = getHtmlText(section.text);
    let textDiv = el('div', { class: 'text-div' }, htmlText);

    return textDiv;
}

function createNavLink(eventHandler, section) {
    return el('a',
        { 
            href: '#' + section.title,
            onclick: '"' + eventHandler('homepage') + '"',
        },
        section.title);
}

// export function setSectionNavLinks(navElement, eventHandler, sections) {
//     sections.forEach((section) => {
//         const link = createNavLink(eventHandler, section);
//         navElement.appendChild(link);  
//     })
// } 

function setSection(eventHandler, navNode, section, index) {
    const link = createNavLink(eventHandler, section);
    navNode.appendChild(link);
    
    let classes = '';

    if (index % 2 === 0) {
        classes = 'home-page-section grey';
    } else {
        classes = 'home-page-section';
    }

    return el(
        'section',
        { 
            class: classes,
            id: section.title,
            
        },
        '',
        [
            setTitleDiv(section),
            setTextDiv(section),
        ]
    );
}

export function homePageView(eventHandler, navNode, sections) {
    const homePageSections = sections.map((section, index) => {
        return setSection(eventHandler, navNode, section, index);
    });

    return el('main', { class: 'home-page-sections' }, '', homePageSections);
}