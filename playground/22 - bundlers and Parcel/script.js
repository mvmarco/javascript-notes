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
     project. And if you don't have a "package.json". And if you do not have one you can simply
     get one by typying: "npm init" and it is gonna ask what's the name of your package. Which
     is the "project name", like "dadjokes". and it ask other bunch of questions that you can
     skip if the project is not that huge by clicking enter. So if you go inside your "package.json"
     you see all the information, for dadjokes would be:

     {
      "name": "dadjokes",
      "version": "1.0.0",
      "description": "",
      "main": "jokes.js",
      "directories": {
        "lib": "lib"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
     }

    3. After getting the "package.json" you can go ahead and install "parcel". You could either
       install it globally when you need a quick server up and running, but any project that is
       going on for more than a couple of days it is recommended to install "parcel" into that
       project folder as well. In that way, co-workers or who dowload the repo from GitHub will
       have the same "parcel" version. And it is to let them get up and running with "npm start".
       So for installing it we want to "npm install parcel-bundler" and you can save it as 
       a "dev-dependency" by running: 
                                         "npm install parcel-bundler --save-dev" 
       what that would do
       is to put it as dependency in our "package.json", under "dev-dependency" and this are
       things not needed to let the application works/run but they are needed for someone to
       work on the application itself. That is the difference between dependency, something like
       "react" or "vue.js", and "dev-dependency" that is just a tooling needed to work on it. 
       ******** check below 
       

       {
         "name": "dadjokes",
         "version": "1.0.0",
         "description": "",
         "main": "jokes.js",
         "directories": {
         "lib": "lib"
         },
         "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1"
         },
         "author": "",
         "license": "ISC",
         "devDependencies": {
         "parcel-bundler": "^1.12.4"  // ******** result of "npm install parcel-bundler --save-dev"
         }
        }

    4. now in order to run parcel we need to add a script to the package.json that will use it.
       we could run "parcel index.html" for instance but it will be connected  automatically
       to the global package.json and not the project we added our package.json. So if you want
       it there, you gotta go inside the package.json and add inside the "script":
       "start": "parcel index.html" // index.html it is our entry point //////////////

        {
         "name": "dadjokes",
         "version": "1.0.0",
         "description": "",
         "main": "jokes.js",
         "directories": {
         "lib": "lib"
         },
         "scripts": {
            "start": "parcel index.html" //////////////
         },
         "author": "",
         "license": "ISC",
         "devDependencies": {
         "parcel-bundler": "^1.12.4"
         }
        }
    
    5. if we get an error saying: "Uncaught ReferenceError: regeneratorRuntime is not defined
       at ........." it means it is because we are using Async - await an we need to add something
       else on our pacakge.json which is: "browserslist": ["last 1 chrome versions"].
       it is a super popular error. Here the package json updated: *************************

       {
        "name": "dadjokes",
        "version": "1.0.0",
        "description": "",
        "main": "jokes.js",
        "directories": {
          "lib": "lib"
        },
        "scripts": {
          "start": "parcel index.html",
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
          "parcel-bundler": "^1.12.4"
        },
        "browserslist": [
          "last 1 chrome versions" // *************************
        ]
       }
*/

// ##############################
// ERRORS
// ##############################

/* 
  if we have some errors and we do know how to fix it, a solution could be to go to
  the project folder where we have the package.json, find the folder named "cache"
  and the folder named "dist" and delete them. Then run again "npm start" and it will
  regenerate them again. It will reload all the files. 
*/

/* 
  another one is that sometimes we gotta delete from the
    <script src="./script.js" type="module"></script>
  the type="module"> so something like that should solve something:
    <script src="./script.js"></script>


*/

// #################################################
// DONE DEVELOPING AND PUT A BUNDLED PROJECT ONLINE
// #################################################

/* 
  after developing you can build a compiled version of your JavaScript file. So when you want
  to put the project online. What you do is to write another "script" into the "package.json"
  called "build": "parcel build index.html" check below **********************

  then you gotta run:                     then you gotta run "npm run build"


  {
  "name": "dadjokes",
  "version": "1.0.0",
  "description": "",
  "main": "jokes.js",
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html" // **********************
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  },
  "browserslist": [
    "last 1 chrome versions" 
  ]
  }

  what this will do is to build all of our JS files and create some "dist" folders. Which are
  basically compiled, minified, compressed versions of our project files. All the time you change
  a file, the dist will be updated after you run "npm run build"

  we also see some ".map" files, basically if there is an error in the compiled files, alredy
  online is not gonna tell me what error would be there, like in the dist file.
  Because it would be not easy to decipher where the error would be since it is a compressed code 
  version of what you wrote. So the what the ".map" would do is mapping back the compiled,
  compressed version back to the original version. the ".map" files will point to which module
  they're in, the original version, and the broswer is able to decipher those map files, and
  give back good errors and tell us where they happened.
*/

// ##############
// IMPORTANT
// ##############

/* 
  all the time you have changed something in your application you gotta run again
  "npm run build". The dist file will remain the same, the one that will change are the one
  where we changed something into the original file. For more info, about the "npm run build"
  check here: https://parceljs.org/production.html

  for more info about this example with "DadJokes" check the exercise folder and exercise folder
  number 81
*/
