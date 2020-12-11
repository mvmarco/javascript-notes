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

const pic = document.querySelector('.nice');
// console.log(pic.classList); it will give an array of all the classes associated to that image
/* if you check the prototype inside the console from classList you can see 
all the methods to be used with the class pic */

// you can add more classes or remove or toggle
pic.classList.add('open');
pic.classList.remove('open');
pic.classList.toggle('round'); // it will add it if it is not there or remove it if is there check CSS
// paste the class above in the console
console.log(pic.classList);

// we can try this

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

// to check if the toggle is active or other state you can use pic.classList.contains('round')

// ############################
// ATTRIBUTES SECTION
// ############################

pic.alt = 'cute pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter - but doesnt work here but in the console yes. Because the picture has to load first

// to let the picture load and then the call the method you have to create an event listener

pic.addEventListener('load', function () {
  console.log(pic.naturalWidth);
});

// pic.width is a setter instead

pic.width = 200; // setter

// to set getters or setters in JS you can also do:

console.log(pic.getAttribute('alt')); // getter
pic.setAttribute('alt', 'Really cute pup'); // setter
console.log(pic.getAttribute('alt')); // getter updated
// in this way above you change also the name of the standard attribute, not a good practice
/* when you have data-name on a photo, data-last in another is ok to use this way so you
 can associate event listener */
