function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely!
  popup.remove();
  /* eslint-disable no-param-reassign */
  popup = null;
  /* eslint-enable no-param-reassign */
}

// #############################
// FIRST STEP
// #############################

/* 
  the "options" will have 2 things:
  - what will be the text of the prompt be
  - should the users be allow to cancel it with a cancel button

  the function takes only resolve, if the user cancel it we won't
  rejecting the promise - it will jusr resolve with nothing
*/
function ask(options) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async function (resolve) {
    // *************** First we need to create a popup with all the fields in it
    const popup = document.createElement('form'); // create the dom element
    // so we can associate the eventListener
    popup.classList.add('popup');
    // here we can add backticks because there is nothing associated with the event listener
    // fieldset is like a div but you can put all the inputs in
    // if you add disable to it, it will disable all the inputs
    // you do options.title because in ask we pass an objects with multiple options
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `
    );

    // *************** Second, check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button'; // if you do not say button, it will assume it is a submit
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function () {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // *************** third, listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        console.log('SUBMITTED');
        resolve(e.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );
    // *************** last, when someone does submit it, resolve the data that was in the inputbox!

    // insert that popup into the DOM
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class

    await wait(50);
    popup.classList.add('open');
  });
}

// select all button that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;

  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over our array
  for (const item of array) {
    results.push(await callback(item));
  }
  // when we are done the loop, return it!
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
