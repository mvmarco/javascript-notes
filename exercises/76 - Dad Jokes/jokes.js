const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

// here we fetch/retrieve the URL with the jokes

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(response);
  // then we convert the reponse in something more readable
  const data = await response.json(); // it is just a single joke
  console.log(data); // we get an error initially without the additional object on response:
  // Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
  /* 
    THIS ERROR HAPPENS ALL THE TIME.  
    what it says is that we have been returned some HTML likely because it returns an open angle
    braket "<" and while it's going to parse that JSON, it realize that it's not JSON but
    HTML. The way to check is going to "network" under "name" find the "request" and by clicking
    you see that it is just an HTML document that came back.

    The way to solve it is to pass on check a second object to fetch, check line 20.
    That object takes in a key "headers": {} which has another object as value.

    stop ----- the documentation in fact says: "All API endpoints follow their respective 
    browser URLs, but we adjust the response formatting to be more suited for an API based
    on the provided HTTP Accept header."

    continue ----- in fact inside the "headers": {} we put Accept: 'application/json'
    because the API says that you can add one of these typologies:

    Accepted Accept headers:

    1 text/html - HTML response (default response format)
    2 application/json - JSON response
    3 text/plain - Plain text response
  */
  return data;
}

async function handleClick() {
  /* 
    const joke = await fetchJoke()
  */
  const joke = await fetchJoke();
  console.log(joke); // we get every single joke all the time we click it
}

jokeButton.addEventListener('click', handleClick);
