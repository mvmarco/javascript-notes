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
  // fire off a custom event that will tell anyone else who cares that the items have been updated!
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

function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS');
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
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
list.addEventListener('itemsUpdated', displayItems);
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
