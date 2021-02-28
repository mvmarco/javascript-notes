// ##############################
// BUNDLERS
// ##############################

/* 
  Module bundlers are tools frontend developers used to bundle JavaScript modules into 
  a single JavaScript file that can be executed in the browser.

  in other words the idea of bundlers is to ship this script ag:
      <script src="./script.js" type="module"></script>
  to the browser and upload the whole project. So the browser will know which JavaScript
  files deliver to the user and in which order. But the best solution is to use a bundler.

  So why use a bundler over a regular module? there are many reasons:
  1. you are able to compress all your files automatically, a robot does that, even images
     so it is less heavy. Everything will be minified, such as variables. For instance, a
     variable called: "options" can become "o". Example.
  2. A bundlers does "dead-code" elimination, which means eliminating un-used functions.
  3. Also if a browser does not support some older syntax such as `backticks` or classes,
     a bundler kind of converts/transpile your code for the browser.
  4. it converts CSS into SASS or LESS or if you are using some of the new CSS auto-prefixer
     stuff

  A bundler usually include the bundler itself and a devserver (eg. with parcel the dev server
  is "parcel start"). Examples of modern module bundlers (in no particular order) are: 
  webpack, parcel, pika  etc.
*/

// ######################################
// HOW TO USE A BUNDLER: EXAMPLE: PARCEL
// ######################################

/* 
  1. step: go to the folder of the project you want to bundle
  2. first thing we need is the "package.json" which is a file that contains information about
     your dependencies, and about what script you have and a bunch of information about your
     project. And if you don't have a package.json. And if you do not have one you can simply
     get one by typying: "npm init"



*/
