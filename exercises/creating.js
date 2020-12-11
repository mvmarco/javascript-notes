const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P'; // add text with style associated
myParagraph.classList.add('special'); // add a class
console.log(myParagraph);

const myImage = document.createElement('img'); // create img element
myImage.src = `https://source.unsplash.com/random/300x300`; // associate the src
myImage.alt = 'nice photo'; // associate the alt
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// to append/add all the above to the page, as last part of the body
// with body you dont have to get it with query selector and a const, it is accessible
// append child adds a node (and element or a text) to the parent
document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
// the way above can slow down things, alternatively you can:
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv); // append everything to a parent

// another one to add things inside the body, it is for text with insertAdjacentText
const headingTwo = document.createElement('h2');
headingTwo.textContent = 'cool things';
myDiv.insertAdjacentElement('afterbegin', headingTwo); // insert before or after something

//  creating a ul with 5 li
const list = document.createElement('ul');

const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);
document.body.insertAdjacentElement('afterBegin', list); // you just insert once

/* cloneNode(), returns a dublicate of an element but it is empty, 
because it does not replicate the child of the element which is the text.
You need to pass true inside cloneNode and define the textContent of the list
*/
const li5 = document.createElement('li');
li5.textContent = 'five';
list.appendChild(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);
