/* anonymys functions are without a name defined 
and you get an error in the console because you need a function name.
just imagine if you don't declare another function inside an anonymus 
function, you need to go and out where is the error among different 
anonymus functions */

/* function expression are the one with the name defined with a const
it was not implicit in the previous way of writing the functions 
before the arrows functions came in */

/// /////////////////////////////////////////////////////////////////////////
// INTERVIEW TOPIC INTERVIEW TOPIC INTERVIEW TOPIC INTERVIEW TOPIC BETWEEN //
/// /////////////////////////////////////////////////////////////////////////

/* a difference between these two function is that if you console.log() the function itself
before its declaration you get an error if the function is anonymus but not if the function
is a function expression - console.logging() a function before its declaration is
hoisting */

/// /////////////////////////////////////////////////////////////////////////
// INTERVIEW TOPIC INTERVIEW TOPIC INTERVIEW TOPIC INTERVIEW TOPIC BETWEEN //
/// /////////////////////////////////////////////////////////////////////////

// ##################################################################################################################
// ARROW FUNCTIONS SECTION ----- ARROW FUNCTIONS SECTION ----- ARROW FUNCTIONS SECTION ----- ARROW FUNCTIONS SECTION ----- ARROW FUNCTIONS SECTION
// ##################################################################################################################

/* arrow functions are by definition anonymus stored into a variable.Using fat arrows => 
(skinny arrow are -> just for info) */

/* how normally are written (they have to have explicit return written)

const inchToCM = (inhes) => {
   return inches * 2.54
}; 

*/

/* how are written in one line, wihout explicit return and curly {} brakets
if there is only one parameter you can also remote the () brakets 
const inchToCM = inches => inches * 2.54;
*/
const inchToCm = (inches) => inches * 2.54;
const conversion = inchToCm(3);
console.log(conversion);

// another example as multiline

const add = (a, b = 3) => {
  const total = a + b;
  return total;
};

const resultAdd = add(10);
console.log(resultAdd);

// single line
const adding = (a, b = 3) => a + b;

const resultAdding = adding(13);
console.log(resultAdding);

// another example creating an object with arrow functions

const makeABaby = (first, last) => {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
};

const babyMade = makeABaby('marco', 'leo');
console.log(babyMade);

// to make it shorter

// eslint-disable-next-line arrow-body-style
const makeABabyTwo = (first, last) => {
  return {
    name: `${first} ${last}`,
    age: 0,
  };
};
const babyMadeTwo = makeABabyTwo('cleo', 'svanholm');
console.log(babyMadeTwo);
/* to make in one line without let the function confuse the object with the curly {} brakets
of the function itself  you do: */

const makeABabyThree = (first, last) => ({ name: `${first} ${last}`, age: 0 });
const babyMadeThree = makeABabyThree('Bjorn', 'svanholm');
console.log(babyMadeThree);
// even though sometimes the two lines function is better, like makeABabyTwo

// ##################################################################################################################
// IIFE FUNCTIONS SECTION ----- IIFE FUNCTIONS SECTION ----- IIFE FUNCTIONS SECTION ----- IIFE FUNCTIONS SECTION ----- IIFE FUNCTIONS SECTION
// ##################################################################################################################

// the IIFE = Immediately Invoked (or RUN) Function Expression is another type of function
/* since the parentesis run first you can put a function inside the ()
and call the (); afterwards */

const iife = ((age) => `your age is ${age}`)(10);
console.log(iife);
// the IIFE are shorter version than:

const longFunction = (age) => `your age is ${age}`;
const showLongFunction = longFunction(20);
console.log(showLongFunction);

// ##################################################################################################################
// METHODS SECTION ----- METHODS SECTION ----- METHODS SECTION ----- METHODS SECTION ----- METHODS SECTION
// ##################################################################################################################

/* a method is a function that lives inside of an object in fact in:
console.log(); 
console is the object, try to open/type console in the console and you will
see a bunch of stuff and if you scroll to log, click and open it you will see that
log is a function (or method of the object console)
*/

// example of a method function inside an object
/* sayHi takes the role of const sayHi = () => 'something';
in other words the name of the function is inherited by the property/key
 since it's a single line with can avoid return and curly brakets
*/
const marco = {
  name: 'marco svanholm',
  sayHi: () => console.log('hey marco:-)'),
};
/* you can call on the console marco.sayHi(); method to marco getting hey marco:-)
while if you do marco.name you get marco svanholm */
console.log(marco);

// you can also write a method like this (the most common)
const marcoShort = {
  name: 'marco',
  // method
  sayHiShort() {
    // this is calling everything inside the object, this call the object
    // this is not working in the arrow methods !!!!!!!IMPORTANT!!!!!!!!!!
    // so if you console.log (`hey ${this.name}`) you get hey marco
    console.log(this);
    console.log('hey marcooo');
  },
};
console.log(marcoShort);

// ##################################################################################################################
// CALLBACKS FUNCTIONS SECTION ----- CALLBACKS FUNCTIONS SECTION ----- CALLBACKS FUNCTIONS SECTION ----- CALLBACKS FUNCTIONS SECTION ----- CALLBACKS FUNCTIONS SECTION
// ##################################################################################################################

/*  callback functions are regular function named like this because are used when
 something happens when something is done.
 example when someone click this run this 
 or
 when this time passes do this
 */

// clickCallBack function

// here you get the class of the button from the document
const button = document.querySelector('.clickMe');
// here you test if it appears in the console
console.log(button);
/* now you need to listen for the 'click' for that button (there are many other events)
and you associate the function you want as reference */
button.addEventListener('click', marcoShort.sayHiShort);
/* now everytime you click it is gonna say hey marcooo (line 144) with the event click and
a call back function marcoShort, the browser call the function when someone click
the button. */

// callback functions can be declared outside in two ways:
const handleClick = () => {
  console.log('Great clicking!');
};
button.addEventListener('click', handleClick);

function handleClickTwo() {
  console.log('Great clicking!');
}
button.addEventListener('click', handleClickTwo);

// or declared inside the event listener with an anonymus callback function
button.addEventListener('click', function () {
  console.log('nice job');
});

// this was not cover by wes but it does work
button.addEventListener('click', () => {
  console.log('trying job');
});
/* timer call back function, it is a function you wanna run after a certain amount of time
first you declare the function and then duration in milliseconds, in other words
after how long shall we run this -> 1000 millisecond is a second */
setTimeout(marco.sayHi, 1000);

// or in the other way

setTimeout(function () {
  console.log('done');
}, 1000);

// this was not cover by wes but it does work
setTimeout(() => {
  console.log('trying done');
}, 1000);
