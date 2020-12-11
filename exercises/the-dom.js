// to get element in the page (DOM - html document linked to your JS) you do:
// query selector will give you the first selecting element matching
/* const paragraph = document.querySelector('p');
console.log(paragraph); */

/* query selector all will give you all of them, in a NodeList. It is like an array
without map or other methods built in it. */
/* const divs = document.querySelectorAll('div');
console.log(divs); */

// you can also be more specific calling a div with a class
/* const divs = document.querySelectorAll('div.item');
console.log(divs); */

// to take all the images inside a div you can do:
/* const images = document.querySelectorAll('.itemTwo img');
console.log(images);
 */
// if you have multiple divs and you want to target a specific element of that div you can:
const itemTwo = document.querySelectorAll('.itemTwo');
const itemTwoImage = itemTwo[0].querySelector('img');
console.log(itemTwo);
console.log(itemTwoImage);

// another example

const heading = document.querySelector('h2');
// here you get all the info associated to the h2 (like text content below)
console.dir(heading);
// if you wanna read the value you do heading.textContent
// text content can give you also the style associated to
// innertext just gives you the text
console.log(heading.textContent);
// if you wanna update it you do:
heading.textContent = 'marco is cool';
console.log(heading.textContent);

console.log(heading.innerHTML); // gives you everything insde the h2 excluded the h2
console.log(heading.outerHTML); // gives you everything insde the h2 included the h2

// to add things next to the text we want to update we use insertAdjacent:

heading.insertAdjacentText('afterbegin', 'olivia ');
heading.insertAdjacentText('beforeend', ' olivia');

/* when using querySelectorAll you cannot apply insert o all automatically. 
 you need to specify the index imagesList[0].insertAdjacentHTML eg */

// ############################
// CLASSES SECTION
// ############################
