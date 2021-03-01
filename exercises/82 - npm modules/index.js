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
// INSTALLING OTHER
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

  so we can create a function as follow and import the "wait" with any name as it is a default
  export. This is the smallest idea of what a package does, as small as a little function.
*/

import wait from 'waait';

async function go() {
  console.log('Going');
  await wait(200);
  console.log('ending');
}

go();
