/* 
  this shows a really good example why the text is async:
  they are running at the same exact time. If this was
  synchronous. each line will be run one after another
*/

function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// this function will give a random number between a min and a max value
// Math.random() generates a number from 0 to 1
// by multiplying it by 2 you get a number from 0 to 1,9999 / example
// how do you get a number from 10 and 15?
// min 20 millecond and max 150 - by doin gthis we get a number from 0 to 130 + 20 = 150
// you store the value of MathRandom() in a variable so it keeps the same random number there and
// does not keep changing every time you run it. so it is easy to test it
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// ###########################
// ASYNC FOR OF LOOP IS BETTER
// ###########################

/* 
  the way it works is you take each letter of the text at the time, and erase the rest

*/
/* 
  async function draw(el) {
    const text = el.textContent;
    let soFar = '';

    for (const letter of text) {
      soFar = soFar + letter;

      // uptadde the content
      el.textContent = soFar;

      // wait for some amount of time since the browser is so far that you do not see the actual
      //replacement - check how data-type-min or max is equal to typeMin or typeMax by logging:
      // console.log(el.dataset)

      // the below code ---- const { typeMin, typeMax } = el.dataset; ---- is equal to:
      // const typeMin = el.dataset.typeMin
      // const typeMax = el.dataset.typeMax

      const { typeMin, typeMax } = el.dataset;
      const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
      await wait(amountOfTimeToWait);
    }
  } 
*/

// #####################
// RECURSION
// #####################

/* 
  you basically do the same thing as the for of loop, but in a different way: using "recursion".
  "recursion" is referring to a function calling itself, until there is some sort of what is
  called an exit condition, until it should stop basically.
*/

function draw(el) {
  // the index will be incremented every single time
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  // here you make a closure
  /* closures are the ability to access a parent level scope from a child scope
    even after the parent function has been terminated 
  */
  async function drawLetter() {
    // take the text and create a new array including position 0 to 1 not included (first time)
    el.textContent = text.slice(0, index);
    index += 1; // increment the index, it is 1 because 0 is not text
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    // exit condition, if you do not put it (the if thing) it will run forever and break the browser
    await wait(amountOfTimeToWait); // each element goes asynchronous, at their own time
    if (index <= text.length) {
      drawLetter();
      // wait for some time
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

/* 
  The reason forEach works in that example is because querySelectorAll is used - 
  and it returns a NodeList  
*/
document.querySelectorAll('[data-type]').forEach(draw);

/* 
  in its essence async await it is just a way first to do things asynchronusly, one at their one time
  and secondly to convert with await promises, such as the one we called "wait"
*/
