// there are three steps: 1 get something, 2 listen to something attached to that, 3 do something

// to listen to an event you need to get the element
const button = document.querySelector('.butts');

// then you need attach the event listener that includes the event and its callback function
/* event and callback function (a function that passes inside a method that
   can be called later in time). 
   In the event listener the function will be run automatically 
   by the browser and says do this when click
   so it is not necessary to do button.addEventListener('click', handleClick());
   but it can happen in case of calling another function
 */

// here you make the function directly inside the event listener
button.addEventListener('click', function () {
  console.log('this run all the time the user click');
});

/* ALTERNATIVE:

button.addEventListener('click',  () => {
  console.log('this run all the time the user click');
});

*/

// here you make the function outside, if you name it with handle...then somethign its better to remember is an event listener function
function handleClick() {
  console.log('it got clicked again');
}

button.addEventListener('click', handleClick);

// another example with arrow function

const coolButton = document.querySelector('.cool');

const handleCoolButton = () => console.log('cool button is clicked');
coolButton.addEventListener('click', handleCoolButton);

/* if you want to apply the same function to two different buttons you 
just create the function once (outside and not inside all the time)
and call it in different events listener */

/* 
function handleClick() {
  console.log('click');
}

button.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

*/

// to remove an event listener you do:
// butts.removeEventLister('click', handleClick);
/* if function is anonymus and/or direct created inside the event listener you cannot do that 
(remove the event listener) 
because there is no way to reference function. In sum:
name function or arrow function are good practice, 
since anonymus functions cannot remove the event listener */

// #########################################
// LISTEN TO THE EVENT OF MULTIPLE ITEMS
// #########################################

// so if you have 10 buttons of buy and you have to attach 10 event listener is not efficient
const buyButtons = document.querySelectorAll('button.buy'); // this should be at the top with all the query

/* if you add eventListener to multiple items the eventListener will not work, because
multiple items dont have a method eventListener
if you console.log(buyButtons) and check the console in the proto you will not find 
the method

while if you do it with the console.dir(button) you will see the method present somewhere */

/* in order to attach multiple elements to the event listener you must loop over
and forEach element attached individually and associate the event listener to it
linked to the outer function
 */

const buyItem = () => {
  console.log('i am the outer function for the event listener');
};

buyButtons.forEach((buyButton) => {
  // console.log(buyButton); this will log all each buyButton tag
  // then for each button you pass the add eventListener linked to the outer function
  buyButton.addEventListener('click', buyItem);
});

// similar if you need to remove it you need to loop over

// another way would be putting the inner function of the for each ouside:

/*

const buyItem = () => {
  console.log('i am the outer function for the event listener');
};

const handleBuyClick = (buyButton) => {
  console.log('binding the buy button');
  buyButton.addEventListener('click', buyItem);
};

buyButtons.forEach(handleBuyClick);
});


*/

// #########################################
// EVENT OBJECT MULTIPLE ITEMS
// #########################################

/* if you wanna know which button has been clicked we need to check
the event object, which is an object filled with all the useful information
and methods for working with our events
 */

const sellButtons = document.querySelectorAll('button.sell');

// if here you add an argument event (which stores all the info about each event)
const handleSellClick = (event) => {
  console.log('you are selling');
  //  and if you console.log(event)
  console.log(event);
  // you get a mouse event (can be click or touches inside the category pointer event)
  // if you open it you see isTrusted which means a boolean if the click is coming actually from a mouse or it is faked with a loop
  // pressure: is pressure sensitivity about someone pressing the screen (nut that is not for mouse)
  // pageX and pageY is the position where the person has clicked
  // you can see also button.target
  // if you console.log(button.target) you see finally the button we clicked on
  // console.log(event.target);
  // after setting the dataset
  // console.log(event.target.dataset); // you get the price in dataset: ... so you do:
  // console.log(event.target.dataset.price); if you check the type:
  // console.log(typeof event.target.dataset.price); // it is a string, you can convert in:
  console.log(parseFloat(event.target.dataset.price)); // parse float you get decimal, with parseInt not
  // so in sum the event.target contains all the information about the button
  // the smart way is to create a const
  const buttonInfo = event.target;
  console.log(buttonInfo.textContent);

  // ############################################
  // DIFFERENCE BETWEEN TARGET AND CURRENT TARGET (interview question too)
  // ############################################

  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget); // we get true, they are the same
  /* 
  
  but the difference comes when we have elements that are nested 
  inside the element you are listening too. Now we add a span around the number of the button¨
  */

  console.log(event.target === event.currentTarget); // if you click the number we get false

  // .target is the element that triggered the event (e.g., the user clicked on)
  // .currentTarget is the element that the event listener is attached to (which can be also the target)*/
  /* in the example above we get false once we introduce the span, because, span is not 
  attached to the event listener, only the button is 
  */

  event.stopPropagation();
  /* as result when you click the window you get the window event and
if you click the button you get only the button event check line 201: */
};

const eventSellClickFunction = (sellButton) => {
  sellButton.addEventListener('click', handleSellClick);
};

sellButtons.forEach(eventSellClickFunction);

// ############################################
// BUBBLING EVENTS AND STOP PROPAGATION
// ############################################

// if you do apply an event lister to the window(browser)

window.addEventListener('click', () => {
  console.log('you clicked the window');
});

// you can see that if you click the window you get the event
// if you click the button you get both of the event the button and the window event

/* 
after getting the button event it checks outside at higher level on the page 
if there is any other event, like the one applied to the window. This is bubbling which means
that the event is first captured and handled by the innermost element 
and then propagated to outer elements.
*/

/* 
to prevent this you can use propagation (stop an event to bubbling up)
 inside the function handleSellClick ----> event.stopPropagation();
*/

/* as result when you click the window you get the window event and
if you click the button you get only the button event check line: 168 */

// 16:22
