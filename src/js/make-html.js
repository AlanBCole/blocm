import marked from 'marked';

export function el(tagName, attributes, text, childNodes) {
    const node = document.createElement(tagName);
    
    if (attributes) {
        for (const attr in attributes) {
            
            if (attr === 'onclick') {
                node.onclick = attributes[attr];
                
            } else {
                
                node.setAttribute(attr, attributes[attr]);
                
            }
        }
    }
    
    if (text) {
      node.innerHTML = text;
    }
    
    if (childNodes) {
        childNodes.forEach((childNode) => {
            node.appendChild(childNode);
        });
    }
    
    return node;
}

export function getHtmlText(text) {
    return marked(text);
}