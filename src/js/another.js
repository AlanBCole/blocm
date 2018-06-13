export function fuckOff(string1, string2) {
    const heading1 = document.createElement('h1');
    heading1.innerText = string1;
    
    const heading2 = document.createElement('h2');
    heading2.innerText = string2;
    
    document.body.append(heading1, heading2);
}