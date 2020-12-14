console.log('it works');
const item = document.querySelector('.items');

// alternative to document.createElement() and then append child.
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `photo description`;
const myHtml = `
<div class="wrapper">
  <h2> ${desc}</h2>
  <img src="${src}" alt="${desc}">
</div>
`;
item.innerHTML = myHtml; // this create html or replace what you have. if you put += will add it at the end
console.log(item.innerHTML); // getter

/* myHtml is not an element, it's a string so we cannot add classes to it such as:
myHtml.classList.add('special') until we item.innerHTML = myHtml;
;

if you wanna add a class to the img tag you need first to put the img inside the dom like above.
then do this: 
 */

const itemImage = document.querySelector('.wrapper img');
itemImage.classList.add('round');
console.log(itemImage);

/* another way to convert the html into a dom element instead of innerHTML

const myFragment = document.createRange();  // a range is a collection or part of html we can add on
.createContextualFragment(myHtml); // attaching this we get a fragment, where we can access our HTML 


then we can do myFragment.querySelector('img');
or document.body.appendChild(myfragment)
*/

/* Using appendChild adds a new DOM element to the end of the parent node.

Using innerHTML += takes the existing DOM content of the parent node, 
serialises it to HTML in a string, adds some more HTML to the end of the string, 
erases the existing elements in the parent node, 
generates DOM elements from that string, then appends the new nodes to the parent node. */
