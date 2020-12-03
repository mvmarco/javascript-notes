// ##################################################################################################################
// FUNCTIONS SECTION ----- FUNCTIONS SECTION ----- FUNCTIONS SECTION ----- FUNCTIONS SECTION ----- FUNCTIONS SECTION
// ##################################################################################################################

// functions let us to group together a set of statements such as setting a variable, run variables
/* function can take in also data known as arguments, passing in data inside a function is an argument
 eg: when you call the method Math.floor(12.44)* the number is the argument */

/* Date.now() gives the number of milliseconds - if you go to epoch.now.sh you convert it in a date
 it is an example of function with no arguments. */

/* cool function is window.scrollTo(0, 200) where scroll to the 200 position in
 a paragraph where 0 is the X orizzontal axis and Y is the vertial.
 here you pass to argument to the window function with a method
 and here:

 window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});

you pass into the fuction an object and it is not necessarily passing results, the one above is undefined
for instance */

// ##################################################################################################################
// CUSTOM FUNCTION SECTION ----- CUSTOM FUNCTION SECTION ----- CUSTOM FUNCTION SECTION ----- CUSTOM FUNCTION SECTION ----- CUSTOM FUNCTION SECTION
// ##################################################################################################################

/* function definition with a function block, calculateBill is the name of the function
bill and taxRate are parameters or place holders,
when anonymus you can put () and when it is one argument you can remove the ()
the place holder can also be with a default value taxRate = 0.05 and then in the 
argument you just call taxRate while bill is still the number you want 

the curly brakes {} are called scope start and scope end
*/

const calculateBill = (bill, taxRate) => {
  // function body
  console.log('Running Calculate Bill');
  const total = bill * (1 + taxRate);
  return total;
};

// calculateBill is the function call or Run
calculateBill();

/* if you console.log the "total" variable outside of the block it would give error: 
console.log(the total is ${total}); or just console.log(total);
because we need to capture the result of the fuction or the return value (return total)
// inside a variable: in a different way. */

// const myTotal = calculateBill();
// console.log(`your totatl is ${myTotal}`);

// // or in a different way.

// console.log(`your total is ${calculateBill()}`);

/* "total is "temporary variable, which is only available inside the function. 
When the function run the variable show the value but then is cleaned up or garbage collected (JS slang) */

// myTotal is the variable to capute the returned value
// 100, 0.13 are arguments, you can call, run or invoke the function
const myTotal = calculateBill(100, 0.13);
console.log(`your totatl is ${myTotal}`);

const myTotal2 = calculateBill(200, 0.13);
console.log(`your totatl is ${myTotal2}`);

/* what can be confused is that if you pass an argument directly inside the fuction call like above 
with numbers,
or you can also do as below with variable with inside a value.
in sum, JS takes whatever is passed in the function call,
whether it is a real value or stored in a variable. From there is put inside the
parameters, does math and return result */

const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal3 = calculateBill(wesTotal, wesTaxRate);
console.log(myTotal3);

// another example with a function definition.
/* if you dont declare the value to be returned anywhere inside the fuction 
the function is gonna look outside and has to be before the function !! */
const firstName = 'marco';
/* here a multi-line function
const sayHiTo = (firstName) => {
  return `Hello ${firstName}`}; */

// here a single line one where you can omit {} and return

const sayHiTo = () => `Hello ${firstName}`;

const greetings = sayHiTo(firstName);
console.log(greetings);

/* another example with a function with parameter, so as long as you pass an argument is fine
otherwise you get undefined */

const saySurname = (surname) => `${surname}`;
const greetingsSurname = saySurname('corapi');
console.log(greetingsSurname);
