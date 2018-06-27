import { el, getHtmlText } from './make-html';

export default function blogListView(model) {
    return el('main', { class: 'blog-list'}, JSON.stringify(model.blogEntries, null, 2));
}