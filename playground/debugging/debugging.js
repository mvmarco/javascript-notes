// ############################
// CONSOLE METHOD SECTION
// ############################

console.log('marco');

// it shoots an error in the console
console.error('wrong name');

// same as .error but it gives an exlamation insead, more for warning
console.log('be cautios');

// if you wanna create a table in the console: console.table. But you need an array/object for instance
const people = [
  { name: 'Marco', cool: true, country: 'sweden' },
  { name: 'Olivia', cool: true, country: 'denmark' },
  { name: 'Bin laden', cool: false, country: 'not sure' },
];

console.table(people);

// if you want to count how manu time a function has been run you can console.count()
// check in the console keeping running exampleCount('somename');
// to check if you run twice a function or a name  console.count(`running ${name}`);
const exampleCount = (name) => {
  console.count('running exampleCount');
  return `my name is ${name}`;
};

const exampleRun = exampleCount('marco');
console.log(exampleRun);

// console.group when you console log multiple things and you wanna group them in the console
// you need to put the end of the group with the same name as the starting group();
const doALotOfStuff = () => {
  console.group('doing some stuff');
  console.log('I am one');
  console.warn('I am another one');
  console.groupEnd('doing some stuff');
};
// check the console. you can do groupCollapsed to auto collaspe the groups. Good for a lot of data
// eslint-disable-next-line no-unused-vars
people.forEach((person, index) => {
  console.groupCollapsed(person.name);
  console.log(person.country);
  console.log(person.cool);
  console.groupEnd(person.name);
});

const grouping = doALotOfStuff();
console.log(grouping);

// ############################
// CALLSTACK  SECTION
// ############################

/* callstack will tell you which function call which one. in other words,
helps to keep track of the place of a function error and the script that calls multiple functions
associated with — what function has the error and what functions are calling
that that function. You need to read from top to bottom.
anonymus means that a function is not been run or run in the console. */

// ############################
// GRABBING ELEMENT SECTION $0
// ############################

/* If you inspect an element in the console, click consoleJS and type $0
you get what you currently have selected in the html element you are inspecting 

this can be useful because you can do $0.value against it and get
what the user typed in it. For instance if it is a search bar.

do $1 you can get the second value of what you selected (maybe a button for a search bar)
and so on with $2 $3 ........

you can also use $ or $$, for instance: 
$('p') gives you the query selector for the paragraph that you are referring to 
$$('p') give you all the paragraphs on the page
 */

// ############################
// BREAKPOINTS SECTION ----------------------- check more IMPORTANT
// ############################

// debugger

// ############################
// SCOPE SECTION ----------------------------- check more IMPORTANT
// ############################

// answer the question: where are my functions and variables availale to me. check the scope file

// ############################
// NETWORK REQUEST SECTION ------------------- check more IMPORTANT
// ############################

/* you can see all the files, and see when a website is sending/receiving data for/to you
by adding more files, and see the response and the time  taken */

// ############################
// BREAK ON ATTRIBUTE SECTION ---------------- check more
// ############################

/* it is a way to find out when the JS is applied to your html in the inspector, click html
and click break on attribute modifications */
