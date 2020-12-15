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
