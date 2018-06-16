import createElement from 'virtual-dom/create-element';

import { setSection, setSections } from './section-view';

const testSections = [
    {
        title: 'Test',
        imgUrl: '../assets/california-2018-small.jpeg',
        text: `# stuff \n## some example text and list \n1. first \n2. second \n3. third  `,
    },
]

const app = document.getElementById('app');
const nav = document.querySelector('nav');

const virtualSections = setSections(nav, testSections);
const view = createElement(virtualSections);

app.appendChild(view);
