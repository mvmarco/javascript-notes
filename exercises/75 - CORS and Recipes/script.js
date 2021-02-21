const baseEndpoint = 'http://www.recipepuppy.com/api';

// if you check the link, on top of the JSON viewer you see how the ?q= is built (the query)
async function fetchRecipes(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

fetchRecipes('pizza'); // here you populate the fetchRecipes. But we do get an error

/* 
  the browser blocked the fetchRecipes, throwing an error saying "No access controll allow origin - 
  origin null"
  
  because of CORS: Cross Origin Resource Sharing.
  
  CROSS ORIGIN (DOMAIN NAMES): 

  mvmarco.com (my website)
  👆
  NO NO NO (by default you are not allowed to share data between origins/domain names)
  👇
  facebook.com or danskebank.dk or recipes.com

  you are allowed to share data from github.com to github.com/about. You are allowed to grab data from 
  other parts of your website. But as soon as you go "cross origin" from one domain name to another
  domain name then you start getting in trouble. Because there are security issues in the browser.
  Like for instance if you are trying to get data from a bank from your personal website is kind of
  a security issue. By default wesites cannot talk from one domain name to another domain name.

  if I wanna take some recipes from a website and put it on my own, we need to be able to talk from
  the recipe website to mine. What needs to happen is that the recipe website has to implent something
  called a "CORS policy". Which something that must happen on the server, nothing that you can do in
  the browser. The "CORS policy" says something like okay, mvmarco.com, is allowed to ask for data and
  we will return it, that is safe. So basically the recipe website has to say "okay these are the domain
  names that are allow to transfer data from my website to theirs". This has to happen on the server of
  the person that has the data. 

  from the error we get, "No access controll allow origin - origin null" it is because their server
  cannot find our domain. Since we open the file locally on the browser. We need to open a server

  after we open a server with: "npm install parcel-bundler" and "npm run start"
  we may run in a common error, not CORS related, saying: "Uncaught ReferenceError: 
  regeneratorRuntime is not defined". 

  "regeneratorRuntime" is this thing called: "babel", what is does is taking your 
  JavaScript with things like "async await or backticks or fetch" (which are relatively new
  to JS and sometimes browser that are old do not know about those things) and transpile or
  convert your code from our modern JS to the version that are runnable to the older browser.
  but in order to avoid to do it so babel can read it properly, we could go to our package.json
  and put after the } a comma: like this: },
  "browserslist": ["last 1 chrome versions"]

  what it does is tricking babel that you are supporting the latest and greatest and then
  there is no need to transpile




*/
