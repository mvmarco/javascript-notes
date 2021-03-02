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

/* 
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
*/

// #################################
// DEPENDENCY INFO: AXIOS
// #################################

/* 
  info here: https://github.com/axios/axios
  So axios is a library for working with, basically, it's the same thing as fetch,
  but A, it has a bunch of nice, little defaults in it ,B, it doesn't have the weird double await
  that our promises do, because of the JSON default. And then also, it works in node js.
  Right now, at the time of writing, fetch is not available on node js.
  You either have to polyfill it or using something like axios.
  And there's all kinds of plugins for axios as well, for caching and things like that, 
  which is pretty neat.


  // EXAMPLE 1

  import axios from 'axios';

  async function getJoke() {
    const response = await axios.get('https://icanhazdadjoke.com', {
      // headers is the second parameter
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(response); // we get an object called data
  }


  So, if you're also doing like some lower level, network stuff, you can use axios for that
  or doing uploads, streaming uploads, makes a lot of that sort of more advanced stuff passed
  just doing a simple get request, it makes it really easy.

  EXAMPLE 2 
  So in our case, we want data, which is a key of the object "data"
  so we could do destructure that data, and just console log data to get the joke info.

  async function getJoke() {
    const { data } = await axios.get('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(data.joke);
  }
  console.log(getJoke());

  So, I can use fetch in most of my used cases but anytime we're doing a little bit more advanced,
  we could reach for axios.
*/

// #################################
// DEPENDENCY INFO: LODASH
// #################################

/*
  Check info here: https://lodash.com/
  Lodash is a utility library for working with arrays, objects, and other interesting things.
  In some cases, you can solve the problem without "lodash" by using with a map filter reduce, 
  but there is use many used cases. Like if something is really complicated with a reduce function
  you can just reach for whatever the equivalent lodash is.

  if you go to the link and then under "intersection", just a random example.
  What it does: If you've got two pieces of data and you want to know what are 
  the same values in them, we can just import it.

  In the examples of the documentation the code has always, an underscore dot _.
  And that just assumes that you import the entire library.
  We can just go ahead and import one method as we want: "intersection" just as we did with
  date functions in "date-fns"


  import { intersection } from 'lodash';

  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const b = [5, 3, 8, 3, 7, 353, 34];

  // Now we wanna know what the the same numbers that exist in both of these arrays?

  const sameValues = intersection(a, b);
  console.log(sameValues); // we get a new array with the values that exist in both of them: 3,5,7,8


  there is also "_.cloneDeep" which is a kind of spread, or object data sign.
  with "cloneDeep" you can tell it how many levels deep you would like to clone.
  Rembembering we covered "reference versus value" when we compare objects we reference 
  the object itself and not the values inside of it. If there are two separate objects 
  even though they may have the same content inside. so if you wanna close a deep part of
  an object you can with "cloneDeep"

  there is also "_.isEqual", if you wanna check if two objects have equal values.
  Objects are always different no matter if they have the same value, check "reference vs value"


  import { isFuture } from 'date-fns';
  import { intersection, isEqual } from 'lodash';

  const person1 = { name: 'marco' };
  const person2 = { name: 'marco' };

  console.log(isEqual(person1, person2)); // we get true

  So I've had a couple of values on there, that will do a check of all of the values on it.
  Spending 2 hours in "lodash" to check the methods, because it will take less time to solve
  some problems in the future.  
*/

// #################################
// DEPENDENCY INFO: AWAIT-TO-JS
// #################################

/* 
  info here: https://www.npmjs.com/package/await-to-js

  import to from 'await-to-js';

  function checkIfNameIsCool(firstName) {
    return new Promise(function (resolve, reject) {
      if (firstName === 'Marco') {
        return resolve('cool name');
      }
      reject(new Error('BAD NAME 📛'));
    });
  }

  async function checkName() {
    const nameDesc = await checkIfNameIsCool('Marco');
    console.log(nameDesc); // we get "cool name"
  }

  checkName();

  async function checkName2() {
    const nameDesc = await checkIfNameIsCool('Richard');
    console.log(nameDesc); // we get error: Uncaught (in promise) Error:'BAD NAME 📛'
  }
  checkName2();

  // if we put "to" after await
  async function checkName3() {
    const nameDesc = await to(checkIfNameIsCool('Richard'));
    console.log(nameDesc);
    // the console log will give us an array with 1st item: error, 2nd item: value
  }
  checkName3();

  // so we can desctructure it as follow:

  async function checkName4() {
    const [err, successValue] = await to(checkIfNameIsCool('M'));
    if (err) {
      // deal with it
      console.log(err);
    } else {
      console.log(successValue);
    }
  }
  checkName4();

  So that's kind of a cool way to deal with things where if you wanna deal with the error 
  right up front, before you keep going in the function, then all you need to do is to wrap it
  in a "to" function and that will return an array of either an error or the regularly
  resolved value.
*/
