console.log('traversing');

// traversing means go up down over, take a parent, get inside an element etc etc.

// here we check the difference between element and dom
const wes = document.querySelector('.wes');
console.log(wes.children); // you get the em tag
console.log(wes.childNodes); // we 3 things: I am marco, the em tag, the rest of the text (olivia)

// so nodeds includes everything while element refers to only the element we consider
const marco = document.querySelector('.marco');
console.log(marco.children);
console.log(marco.firstElementChild); // will give you the first child inside the class mentioned
console.log(marco.lastElementChild); // will give you the last child inside the class mentioned
console.log(marco.previousElementSibling); // will give you the element before what is included/outside in the class
console.log(marco.nextElementSibling); // will give you the element after what is included/outside in the class
console.log(marco.parentElement);
