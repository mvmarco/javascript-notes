/* 
  first thing is to listen to everytime the user type into the input (add item)
  add hit the submit button. if you dont add an event listener whatever the user
  put goes to the url but does not go anywhere

  second we gotta keep track of all the items, whether or not they are complete
  on the screen

  thrird we gotta render/give out a list of those items
*/

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state (all the items)
/* 
  state means in JS when you have state, state is a bunch of data that reflects
  the status of your application. State contains the list of all the items you got
  the IDs of that items or whether or not they have been completed (sold, expensive
  etc etc)
*/
let items = [];

// first step
function handleSubmit(e) {
  e.preventDefault(); // stop the submission
  console.log('submitted!!');
  console.log('check here', e.currentTarget);
  console.log('check here', e.currentTarget.item.value);
  // get the data from what the user type¨
  // you gotta do .item.value because item is the name of the input
  // you can use whatever is inside the input to get the value
  // and we need to get the value of the input which is what the user types
  // not just the current target which is the form itself, you cannot store that info as data
  const name = e.currentTarget.item.value;
  // if its empty what the user put, then dont submit it - we also added the required in the HTML
  if (!name) return;
  /* 
    now we gotta store the user input as data in the array items
    but we cannot just store straight strings but more information¨
    like the ID, is it completed? if it is bought or not and the 
    actual name
  */
  const item = {
    name, // equale to name: name, it has been refactored
    id: Date.now(), // something unique, that is the trick as long as you dont add items in milliseconds
    // that could be a problem for databases if you save them fast
    complete: false, // by default are not completed or bought
  };
  // Push the items into our state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // Clear the form, it cleans the target of the form so the user does not have to cancel
  // all the time the word that he puts
  // the below code is the same as e.currentTarget.item.value = '';
  e.target.reset();
  /* 
    now we gotta display the items, we could just fo it with:

    displayItems();

    but in larger JS applications we have to display items not only when the user adds them
    but for instance:
      1 when the page is reloaded the items should be still there from the local storage
      2 display them also when we mark them as completed or sold/bought
      3 when delete an item you gotta show the items not deleted
    so it is necesary to do more things in larger JS applications

    Like if you want 2 of this display sectiond you cannot just copy the inner function
    (display items) of the event to other parts because it will be too much code.

    An alternative would be to use our own events or custom events(event systems),
    where we listen to those events and listen to items updated event

    so instead of display the items we are gonna to fire off a custom event that 
    will tell anyone else who cares that the items have been updated!

    dispatch means that an event happens for instance: when focusing a text bar or
    clicking a submit the browser dispatch an event

    dispatchEvent() is a method that lives inside every dom element and you gotta
    give a new CustomEvent (which is a function in the console) and its name
  */

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);

  /* 
    in otder to display the items, you call the items and create
    a new array with .map where for each name you put it inside a
    list:

    names = ['marco', 'olivia']
    names.map(name => `<li> ${name} </li>`)
    // here you get something like ["<li> marco </li>", "<li> olivia </li>"];
    so you can just call join and select the individual list names
    all together would be: names.map(name => `<li> ${name} </li>`).join("");
    <li> marco </li>
    <li> olivia </li>
  */

  // the class shopping item just put some style to the items on the list
  // &times gives the x sign and aria-label prevent that is read as multiplication for screen readers
  const html = items
    .map(
      (item) => `<li class="shopping-item"> 
      <input
        value="${item.id}"
        type="checkbox"
        ${item.complete && 'checked'}
      >
      <span class="itemName">${item.name}</span>

      <button
        aria-label="Remove ${item.name}"
        value="${item.id}">
        &times;
      </button aria-label="Remove>
  </li>`
    )
    .join('');
  list.innerHTML = html; // const list = document.querySelector('.list');
}

/* 
  in the console if you type localStorage you get a Storage or an object with all the
  items, if you do localStorage.setItem(key, value) so if you do
  localStorage.setItem('name', 'wes') you put it in the local storage
  the opposity would be to get them from there with 
  localStorage.getItem('name')  you just pass the key --> and you get the value 'wes'

  so in the application you will see a table of 2 columns one is for the keys
  like 'name' and one is for the values like 'wes'

*/
function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  // if you dont stringfy you just put objects and you need to put string/text to see them
  /* 
    if you get a number or an array you can just do: string.toString() or array.toString()
    but if you got an object and call object.toString the result will be "object object"
    many times as the items inside the object itselt. so if you got an object

    const person = {name: 'ves', age: 100} 
    person.JSON.stringify(items) you will get a object with inside each element in a string
    format

    {"name: 'wes'", "age: 100" }¨

    if you wanna go back to the normal object from a string you can do
    person.JSON.parse(items)
  */
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS');
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // check if there is a length of items (the first time the user load the page would be empty)
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    // items.push(lsItems[0], lsItems[1]);
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('DELETIENG ITEM', id);
  // update our items array without this one
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
// ######################
// first step
// ######################
shoppingForm.addEventListener('submit', handleSubmit);
// ######################
// first step
// ######################

// here you take the custom even and add display items function
list.addEventListener('itemsUpdated', displayItems);

/* 
  here you add the display items custom event to mirrorLocalStorage.
  a local storage is a sort of database that lives inside the browser.
  It is just a way to save some data in the user browser for the future time.

  how to find is console > application tab > local storage > domain name(localhost)
  any website has it. check it out

*/
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: We listen or the click on the list <ul> but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', function (e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();

// 36:00
