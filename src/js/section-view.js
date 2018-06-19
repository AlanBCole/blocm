import el from './make-html';
import marked from 'marked';

function setTitle(title) {
    return el('h2', {}, title);
}

function setImage(url) {
    return el('img', { src: url });
}

function getHtmlText(text) {
    return marked(text);
}

function setTitleDiv(section) {
    return el('div', {
            class: 'title-div',
        },
        '',
        [
            setTitle(section.title),
            setImage(section.imgUrl),
        ]
    );
}

function setTextDiv(section) {
    const htmlText = getHtmlText(section.text);
    let textDiv = el('div', { class: 'text-div' }, htmlText);

    return textDiv;
}

function createNavLink(section) {
    return el('a', { href: '#' + section.title }, section.title);
}

export function setSection(navElement, section, index) {
    const link = createNavLink(section);
    navElement.appendChild(link);
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

export function setSections(navElement, sections) {
    const homePageSections = sections.map((section, index) => {
        return setSection(navElement, section, index);
    });

    return el('main', { class: 'home-page-sections' }, '',homePageSections);
}