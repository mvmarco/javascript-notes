// ############################################
// PREVENT DEFAULT AND NAMING THE FORM
// ############################################

const wes = document.querySelector('.wes');
const handleWes = (event) => {
  console.log('you clicked the link');
  console.log(event);
  /* 
    you cannot see it because it goes to the other page (its a link) - 
    go to console, setting and preserve log. so now you can see the console and the event
    what we can do is also:
  */
  /* 
 prevent the default thing of the element to happening (change page in this case)
 */

  // a way to pop up a message when changing page is:

  // eslint-disable-next-line no-restricted-globals
  const shouldChangePage = confirm('do you wanna change page');
  if (!shouldChangePage) {
    event.preventDefault();
  }
};

wes.addEventListener('click', handleWes);

// get the form with name

const signUpForm = document.querySelector('[name="signup"]');

const handleSubmit = (event) => {
  console.log('you submited the form');
  event.preventDefault();
  console.dir(event.currentTarget); // you see there is name: input#name
  // so you can:
  console.log(event.currentTarget.name.value); // available because there is name="name" in html
  console.log(event.currentTarget.email.value); // available because there is name="email" in html
  console.log(event.currentTarget.agree.checked);

  /* 
  if you dont use the property name you can do:
  document.querySelector('["name=email"]')  
  */

  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    // includes is case sensitive, so if you put Chad all is fine
    alert('sorry bro');
    event.preventDefault();
  }
};
signUpForm.addEventListener('submit', handleSubmit); //

// ############################################
// TYPES OF EVENTS
// ############################################

/* 
'keyup'
'keydown'
'focus'
'blur'
*/
// console.log(signUpForm.name); // listen automatically to the event

const logEvent = (event) => {
  console.log(event.type);
  console.log(event.currentTarget.value); // gives us the event name and what the user typed
};

signUpForm.name.addEventListener('keyup', logEvent); // all the tiple you type you get a keyup
signUpForm.name.addEventListener('keydown', logEvent); // it tells the key entered before
signUpForm.name.addEventListener('focus', logEvent); // when you click inside the element
signUpForm.name.addEventListener('blur', logEvent); // when you click outside of the element
// focus and blur are used to show styling or to understand how long people spend on stuff
