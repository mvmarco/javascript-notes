// make a div

const div = document.createElement('div');
console.log(div);

// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
// const ul = document.createElement('ul');
const ul = `
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;
// add three items with the words "one, two three" in them

/* const liOne = document.createElement('li');
const liTwo = document.createElement('li');
const liThree = document.createElement('li');

liOne.textContent = 'one';
liTwo.textContent = 'two';
liThree.textContent = 'three';

ul.appendChild(liOne);
ul.appendChild(liTwo);
ul.appendChild(liThree); */

// put that list into the above wrapper
// div.appendChild(ul);
div.innerHTML = ul;

// create an image
const img = document.createElement('img');
// set the source, width o 250 and a class of cure and an alt of cute puppu
img.src = 'https://picsum.photos/500';
img.width = 250;
img.alt = 'cute puppu';
img.classList.add('cure');

// append the img to the wrapper

// div.insertAdjacentElement('beforeend', img); you can also do the following as it will go below anyway

div.appendChild(img);

// with HTML string, make a div with two paragraphs inside of it
const divString = `
<div class="myDiv">
  <p>paragraph 1</p>
  <p>paragraph 2 (because the first one got removed below in the JS)</p>
</div>`;
// put this div before the unordered list from above

// div.insertAdjacentElement('afterbegin', divString); // not working because it is not an element
div.insertAdjacentHTML('afterbegin', divString); // html because it is a string of multiple element to be converted

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
console.log(myDiv);
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove('p');

// create a function called generatePlayerCard that takes in three arguments: name, age, height
// the function should return the html of the exercise
const generatePlayerCard = (name, age, height) => {
  const html = `
  <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>their height is ${height} and ${age} years old.
    in dog years this person would be ${age * 7} that would be a tall dog.
    </p>
        <button  class="delete" type='button'>&times;delete</button>
  </div>`;
  return html;
};
console.log(generatePlayerCard);
// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// use the previous function and make 4 cards
let cardsHTML = generatePlayerCard('marco', 29, '177cm');
cardsHTML += generatePlayerCard('olivia', 24, '180cm');
cardsHTML += generatePlayerCard('lapo', 8, '100cm');
cardsHTML += generatePlayerCard('emma', 8, '50cm');

// append those cards to the div
newDiv.innerHTML = cardsHTML;
// put the div into the DOM just before the wraapper element
div.insertAdjacentElement('beforebegin', newDiv); // element because it is a div
// bonus, put a delete button on each card so when you click it the whole card is removed

// select all the buttons
const buttons = document.querySelectorAll('.delete');
// loop over them and attach a listener
const deleteCard = (event) => {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove(); // another way more dangerous
  buttonThatGotClicked.closest('.playerCard').remove();
};
buttons.forEach((button) => button.addEventListener('click', deleteCard));
