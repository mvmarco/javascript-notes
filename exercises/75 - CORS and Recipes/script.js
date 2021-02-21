const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;

const form = document.querySelector('form.search');
// if you check the link, on top of the JSON viewer you see how the ?q= is built (the query)
async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data); // here we get the json data:)
  return data;
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget.query.value); // we get pizza
}

form.addEventListener('submit', handleSubmit);

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
  there is no need to transpile. Another thing you can do if you still have issues kill the
  server. go to to delete "cache" and "dist" and run again the npm start.

  but now we get: "localhost/:1 Access to fetch at 'http://www.recipepuppy.com/api?q=pizza'
  from origin 'http://localhost:1234' has been blocked by CORS policy:
  No 'Access-Control-Allow-Origin' header is present on the requested resource. 
  If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch 
  the resource with CORS disabled."

  this new ERROR is not anymore that the origin is null but that the origin is now
  blocked. Like the recipe website is saying "you are not suppose to use this in the
  browser". The solution should be on their website solutions. but it is not. the idea
  is that if they do not have a CORS policy on browsers, but they from their website
  have an "iphone app" so supposely you can run this from the phone. SO the idea is that
  you if you amde a request from anything other than a browser it works. The solution is
  that instead of going directly from: "localhost" to "recipepuppy" we put in the middle
  a "proxy":
  
  localhost (send data to the proxy, a random server controlled by who knows who)
  👆
  👇
  PROXY (will make a server side request) (receive data from the recipe and send it back to
        the localhot)
  👆
  👇
  recipepuppy (say it is all good and send back the data to the proxy)

  you can either build up an entire server that handle your request yourself or
  if it is something silly like this example, where there is nothing sensitive
  we use something called CORS PROXY which is something that people provided to you
  and you can stick it in front of your URL and it wil proxy the data from you.
  if you google: "cors proxy" you go for instance here: https://cors-anywhere.herokuapp.com/
  copy that url in front of your "endpoint". and will proxy that data for you.

  A CORS PROXY is not a good for sensitive data like users name, passwords, email and other
  sensitive infos. In that case you gotta run your own server yourself.

*/
