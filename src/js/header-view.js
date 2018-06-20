import { el } from './make-html';
import { startApp } from './app';

export function setBlogNavLink(navElement) {
    const blogLink = el('a', {
            href: '#blog',
            onclick: 'startApp("blog")',
            id: 'blog-link'
        },
        'Blog'
    );
    
    navElement.appendChild(blogLink);
    // const blog = document.createElement('a');
    // blog.href = "/#blog";
    // blog.onclick = "clickHandler(msg)";
    // blog.innerText = "blog";
    
    // nav.appendChild(blog);
}