import { el, getHtmlText } from './make-html';

function setBlogImage(blogEntry) {
    return el(
        'img', 
        {
            src: blogEntry.imgUrl, 
            alt: "a blog picture", 
            class: 'blog-pic' 
        }
    );
}

function setBlogTitle(title) {
    return el('h4', { class: 'blog-title'}, title);
}

function setBlogText(blogText) {
    const htmlText = getHtmlText(blogText);
    return el('div', { class: 'blog-text-div' }, htmlText);
}

function setSection(blogEntry, index) {
    // const link = createNavLink(eventHandler, section);
    // navNode.appendChild(link);
    
    let classes = '';

    if (index % 2 === 0) {
        classes = 'blog-short-view grey';
    } else {
        classes = 'blog-short-view';
    }

    return el(
        'section',
        { 
            class: classes,
            id: blogEntry.title,
            
        },
        '',
        [
            setBlogTitle(blogEntry.title),
            setBlogImage(blogEntry),
            setBlogText(blogEntry.blogText)
        ]
    );
}

export default function blogListView(model) {
    const { blogEntries } = model;
    
    const blogSections = blogEntries.map((blogEntry, index) => {
        return setSection(blogEntry, index);
    })
    
    return el('main', { class: 'blog-list'}, '', blogSections);
}