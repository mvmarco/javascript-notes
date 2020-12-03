// (for interview) types are: SNOBUSN - string, number, object, boolean, undefined, string, null

// ##################################################################################################################
// STRING SECTION ----- STRING SECTION ----- STRING SECTION ----- STRING SECTION ----- STRING SECTION
// ##################################################################################################################

// to escape a character in a string use
const bella = 'marco\'s girlfriend and she is "cool"';
console.log(bella);

/* for multiline string use backticks (shift + ..after the plus, the sign on my DK keybord..) also for:
concatenation (strings combined into one) or interpolation (variables into string) use backticks and
avoid the plus - bugs */
const song = `this is a multiline
song

with backticks and space`;
console.log(song);
const name = 'marco';
const string = `marco ${name} and I am ${10 + 10} years old`;
console.log(string);
// the multilines with backticks are useful for creating html

const html = `
  <div>
    <h2>${name}</h2>
    <p></p>
  </div>
`;

document.body.innerHTML = html;

// ##################################################################################################################
// NUMBERS SECTION ----- NUMBERS SECTION ----- NUMBERS SECTION ----- NUMBERS SECTION ----- NUMBERS SECTION
// ##################################################################################################################

// check in the console -- typeof age -- to check the type of a variable
let age = 100;
age += 10;
console.log(age);
/* another thing is: helpers methods check in the console Math.something() - e.g:
Math.round(10.7) - it will round up with result 11 or down in case of Math.round(10.2) with result 10
Math.floor(20.999) gets the lowest level 20
Math.ceil(20.999) gets the highest level 21
Math.random() gets a random number from 0 to 1 - 0,1123232 e.g.
Math.max(10, 12) gets the max number which is 12 
ParseFloat("10.800"); gives back a float from a string: 10.800
ParseInt("10.8900"); gives back an integer from a string: 10
*/

const smarties = 20;
const kids = 3;
// in this way instead of getting from 20/3 6.666666 you get just 6
const eachKidGets = Math.floor(smarties / kids);
console.log(`each kid gets ${eachKidGets}`);

// to now how many smarties are left left: smarties % kids which is 2

/* another thing if you do 0.1 + 0.2 you get something like 0.300000000000004 so
 if you deal money math and cent is advised to put everything in cents eg. 10.34 would be 1034 then
 you modify it 
 check: window.location = `https://${0.1 + 0.2}.com`; */

// another thing by multiplying 1000 ** 200 you get infinity which means is the highest number a computer can calculate
// another thing if you divide 10/'dog' you will get: Nan which means not a number but the typeof is a number.

/* Important thins is that 10 == 10 is checking if the number is equal to a number
while 10 === 10 is checking if a number and a type is equal to a number and a type 
if you use '10' == 10 you get true but it is not and it is a bad practice while
if you do '10' === 10 is false because check the type of string and it is not equal to the number
therefore is a good practice use === */

// ##################################################################################################################
// OBJECTS SECTION ----- OBJECTS SECTION ----- OBJECTS SECTION ----- OBJECTS SECTION ----- OBJECTS SECTION
// ##################################################################################################################

// objects is everything is {} brakes
const person = {
  first: 'wes',
  last: 'bos',
  age: 10,
};
// order doesnt matter in an object, for that use array. To get the value you use:
// person.first;
// person.last;
// person.age;

// ##################################################################################################################
// UNDEFINED/NULL SECTION ----- UNDEFINED/NULL SECTION ----- UNDEFINED/NULL SECTION ----- UNDEFINED/NULL SECTION ----- UNDEFINED/NULL SECTION
// ##################################################################################################################

/* if you declare a variable but you dont define its entity you get undefined,
there is nothing there. check:

let dog 
console.log(dog); */

/* "null" is something that has a value of nothing

exaple: const marco = null;             explicit null

while "undefined" is a variable that has not a value set to it

example: let dog
console.log(dog);                undefined
*/

// eslint-disable-next-line no-unused-vars
const cher = {
  first: 'cher',
};
// cher.surname ---- undefined

const teller = {
  first: 'raymond',
  last: 'teller',
};

teller.first = 'teller';
teller.last = null;

// teller.last ---- null

// ##################################################################################################################
// BOOLEAN SECTION ----- BOOLEAN SECTION ----- BOOLEAN SECTION ----- BOOLEAN SECTION ----- BOOLEAN SECTION
// ##################################################################################################################

// for  logic statemts - true false
const isDrawing = false;
const age1 = 18;
const ageOf = 19;
