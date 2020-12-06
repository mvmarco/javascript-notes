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
  sayHi: () => 'hey marco:-)',
};
/* you can call on the console marco.sayHi(); method to marco getting hey marco:-)
while if you do marco.name you get marco svanholm */
console.log(marco);
