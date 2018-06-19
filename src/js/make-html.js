function el(tagName, attributes, text, childNodes) {
    const node = document.createElement(tagName);
    
    if (attributes) {
        for (const attr in attributes) {
            node.setAttribute(attr, attributes[attr]);
        }
    }
    
    if (text) {
      node.innerHTML = text;
    }
    
    if (childNodes) {
        childNodes.forEach((childNode) => {
            node.appendChild(childNode)
        
        })
    }
    
    return node;
}

export default el;