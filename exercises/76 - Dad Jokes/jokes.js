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
  // when we fetch something we turn on the loader icon
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(response);
  // then we convert the reponse in something more readable
  const data = await response.json(); // it is info about a joke, its id and other info
  // here we take all the info, later on we just select the joke in handle click
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
  // turn the loader off when the data is coming
  loader.classList.add('hidden');
  return data;
}

// make a button change for each joke randomly
function randomItemFromArray(array, whatShouldNotBe) {
  // we take the array that was passed in and take a random index get the value of one array item
  /* 
    Math.floor(Math.random() * array.length) so if the array is 5 items
    we multiply it to a random number from 0 to 1 so you get max 4.99 with floor you go
    down to 4. Since the array start at 0 - you still have 0 1 2 3 4 5

    we gonna take the search for the index

    the reason why we do not pass the "buttonText" array is because we want
    the "randomItemFromArray" to be an utility function. A function that can be used
    with any data, any array:-)
  */
  const item = array[Math.floor(Math.random() * array.length)];
  // sometimes it would run the same exact same index and value, to prevent this we could:
  if (item === whatShouldNotBe) {
    // "whatShouldNotBe" meaning the last version of the index
    // if it is equal we run it again
    // check the handle click
    console.log('aah we used that one last time, look again');
    return randomItemFromArray(array, whatShouldNotBe); // recursion: a function that call itself
  }
  return item;
}

async function handleClick() {
  /* 
    const { joke } = await fetchJoke();

    would become without destructuring it:
    const data = await fetchJoke();
    console.log(data.joke);

  */
  const { joke } = await fetchJoke();
  console.log(joke); // we get every single joke all the time we click it
  jokeHolder.textContent = joke;

  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}

jokeButton.addEventListener('click', handleClick);
