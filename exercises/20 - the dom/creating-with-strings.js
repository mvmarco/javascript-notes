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
item.innerHTML = myHtml;
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
