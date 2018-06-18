import { h } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import marked from 'marked';

function setTitle(title) {
    return h('h2', title);
}

function setImage(url) {
    return h('img', { src: url });
}

function getHtmlText(text) {
    return marked(text);
}

function setTitleDiv(section) {
    return h('div', {
            className: 'title-div',
        },
        [
            setTitle(section.title),
            setImage(section.imgUrl),
        ]
    );
}

function setTextDiv(section) {
    const htmlText = getHtmlText(section.text);
    let textDiv = h('div', { className: 'text-div' }, [htmlText]);
    textDiv.innerHtml = htmlText;

    return textDiv;
}

function createNavLink(section) {
    return h('a', { href: '#' + section.title }, section.title);
}

export function setSection(navElement, section) {
    const virtualLink = createNavLink(section);
    const link = createElement(virtualLink);
    navElement.appendChild(link);

    return h('section', { className: 'home-page-section' }, [
        setTitleDiv(section),
        setTextDiv(section),
    ]);
}

export function setSections(navElement, sections) {
    const virtualSections = sections.map((section) => {
        return setSection(navElement, section);
    });

        // return virtualSections;
    return h('main', { className: 'home-page-sections' } , virtualSections);
}