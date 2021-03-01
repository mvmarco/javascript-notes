/* 
  // #################################
  // WTH IS NPM
  // #################################

  The letters npm stand for “node package manager”. When you are working on a JavaScript project, 
  you can use npm to install other people’s code packages into your own project.

  npm is a tool you install on your computer. It’s part of node, so install the LTS version of Node 
  (https://nodejs.org/en/)to get both the node and npm commands in your command line.

  You use npm from the command line to install, uninstall or update packages. By “package” I mean 
  any piece of code which someone has chosen to publish on npm.

  Some examples of npm packages are:
  Angular
  React
  jQuery
  Express
  Socket.io

  There are thousands of packages published on npm. You can browse them on https://www.npmjs.com/
  To use npm packages in a project, your project must contain a file called "package.json". 
  This file keeps a list of all the packages you are using, and which version of each one you 
  have chosen to use.

  Each time you open your project on a different computer, you may have to reinstall all your 
  packages. This is especially true if you are moving between Mac and Windows. This is because 
  not all packages are cross-compatible, and sometimes need a version downloaded for the specific 
  system you are using it on. When you open a project for the first time or on a different computer, 
  reinstall all your packages: cd "to your project" and then run "npm install" 

  After running npm install there will be a new folder in your project called node_modules. 
  This folder contains all the code for all the packages you have installed.
  Check below for more:

*/

// #################################
// STEPS FOR PACKAGE JSON AND PARCEL
// #################################

/* 
  1. "npm init" created the package.json directory
  2. "npm install parcel-bundler -D"  install parcel and put the web dependency (with shortcut)
      it creates also a "node_modules" folder with around 500 files. What happens is that parcel
      has dependencies itself, little packages that it needs in order for it to work. It is always
      fine to delete the "node_modules" folder because you can always get it back by installing
      "npm install". The thing is that we want some dependencies in our package.json. 
  3. remove: "test": "echo \"Error: no test specified\" && exit 1" 
     and add: "start": "parcel index.html" necessary to run parcel
  4. in order to avoid any errors from the browser when we use async-await we could put:
     "browserslist": ["last 1 chrome versions"]
  5. run "npm start", in case of error cancel "cache" and "dist" and run again "npm start"

*/

// #################################
// INSTALLING OTHER DEPENDENCIES
// #################################

/* 
  to install other depencies like "faker", "date-fns", "await-to-js", "lodash", "axios"
  we can install them all together by putting a space between them as follow:
  "npm i faker date-fns await-to-js lodash axios" and then "npm start"

  notice that we do not add -D (put them in dev-dependencies) as they are just "dependecies".
  Dependecies that make our project easy to develop and make our project run in production
  and they are necessary to make the project work. without them the production wont work. It
  will only work with a manual code of these dependencies but it is harder to code. And not
  an easy package. check the example below.

  while "devDependencies" are required only when developing our project and 
  will not be necessary for the production. Like Parcel: The browser does not care if we 
  use parcel or not for the final live code (in production).Build tools (webpack, parcel, snowpack)
  are only that, build tools. They do not run in production when you host a website.
*/

// #################################
// INSTALLING OTHER: WAAIT
// #################################

/* 
  https://www.npmjs.com/package/waait this is the function we wrote all the time:

  const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

  we could install it separetely with "npm i waait" and again "npm start"

  in the doc the function and how to import it is:

  import wait from 'waait';

  async function doStuff() {
    doSomething();
    await wait();
    doSomethingElse();
    await wait(200);
    console.log('200ms later');
  }

  so we can create a function as follow (go function) and import the "wait". 
  In import "wait" can be any name since originally it is a default export.
  This is the smallest idea of what a package does, even with a small as a little function
  such as wait, that we could write over and over and over. Instead, we use a package. Sometimes
  it is usuful have someome deploy something on npm and you simply just npm install it and
  import it, then use it.
*/

/*
  import wait from 'waait';

  async function go() {
    console.log('Going');
    await wait(200);
    console.log('ending');
  }

  go();
*/
// #################################
// DEPENDENCY INFO: FAKER
// #################################

/* 
  check info here: https://www.npmjs.com/package/faker 
  in sum faker.js generate massive amounts of fake data, for instance:

  let randomName = faker.name.findName(); // Caitlyn Kerluke
  let randomEmail = faker.internet.email(); // Rusty@arne.info
  let randomCard = faker.helpers.createCard(); // random contact card containing many properties

  sometimes the doc, does not really tell yoy how to import it and you see something like:
                          var faker = require('faker/locale/de'); 
  which is the older node.js syntax. Which is referred to common.js while the:
                          import faker from 'faker';
  it is the new one, Which is referred to as ECMAScript modules.
*/

/* 
  EXAMPLE 1: 
  import faker from 'faker';

  console.log(faker); // you see a bunch of keys of an object with fake data
  console.log(`hello ${faker.name.firstName()}`); 
*/

/* 
  EXAMPLE 2:
  import { name } from 'faker'; // here you can import a subset of faker with just names
  console.log(name);


  // how do we get an array with 10 fake names?

  // we use Array.from. Array.from({length: 10}) takes something that has a length and return 
  // an empty array with that length if you don't pass a second params. The second params is 
  // a sort of map function that returns what you want.

  const fakeNames = Array.from({ from: 10 }, name.firstName());
  console.log(fakeNames); // 10 fake names

  // if you want a full name you can pass your call back function

  const fakeFullNames = Array.from(
    { from: 10 },
    () => `${name.firstName()} ${name.lastName()}`
  );
  console.log(fakeFullNames);
*/

// #################################
// DEPENDENCY INFO: DATE-FNS
// #################################

/* 
    check info here: https://date-fns.org/ 
    usually the big dependency have their own website.

    they have different methods to work with it such as:
    import { format, formatDistance, formatRelative, subDays } from 'date-fns'
    and it allows you to format and work with dates in a much nicer way than having to work 
    with just the regular date library that's built into the browser.

    if we click to the documentation: https://date-fns.org/docs/Getting-Started
    if I wanna say like, something minus three days was how long ago? we go to search
    and search for "time ago" > "formatDistance" we find "formatDistance".
    if you have two dates and you wanna know what the difference is between those two dates, 
    you can import "formatDistance". If you want the date from now and the future you can 
    search for "formatDistanceToNow". If you have a date and you wanna format it in a specific
    way you can search for "format".
*/

// EXAMPLE 1
import { formatDistance, format } from 'date-fns'; // similar to moment.js but shorter, take what you want

const diff = formatDistance(
  new Date(1986, 3, 4, 11, 32, 0),
  new Date(1986, 3, 4, 10, 32, 0),
  { addSuffix: true }
); //= > 'in about 1 hour'
console.log(diff);

// EXAMPLE 2
const diff2 = formatDistance(new Date(), new Date(2021, 3, 4, 10, 32, 0), {
  addSuffix: true,
}); //= > 'in about 1 month'
console.log(diff2);

// EXAMPLE 3
// we want the date of today that looks like this: March the 1st 2021
// the syntax says that takes: formatDistance(date, baseDate, [options])
const date = new Date(); // today's date
const formatted = format(date, `LLLL 'the' do y`); // check the doc for this
console.log(formatted);
