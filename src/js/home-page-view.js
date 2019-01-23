import { el, getHtmlText } from './make-html';

function ownerImage(url) {
    return el('img', {src: url, alt: "a homepage picture", id: "greeting-pic" });
}

function setTitle(title) {
    return el('h4', { class: 'section-title'}, title);
}

function setTextDiv(section) {
    const htmlText = getHtmlText(section.text);
    let textDiv = el('div', { class: 'text-div' }, htmlText);

    return textDiv;
}

function setSection(section, index) {
    // const link = createNavLink(eventHandler, section);
    // navNode.appendChild(link);
    
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
            setTitle(section.title),
            setTextDiv(section),
        ]
    );
}

export default function homePageView(model) {
    const homePageSections = model.homePageSections.map((section, index) => {
        return setSection(section, index);
    });

    return el('div', { class: 'home-page-sections' }, '', [ownerImage(model.blocmOwnerImgUrl), ...homePageSections]);
}