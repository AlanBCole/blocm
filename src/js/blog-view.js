import { el, getHtmlText } from './make-html';

function setImage(url) {
    return el('img', { src: url });
}

function setTitle(title) {
    return el('h2', {}, title);
}

function setTitleDiv(blog) {
    return el('article', { class: 'blog-entry' }, )
}