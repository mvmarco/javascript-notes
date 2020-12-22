const terms = document.querySelector('.terms-and-conditions');

/* 
const handleScroll = (event) => {
  console.log(event.currentTarget.scrollTop); // tell us the pixel you scrolled from the top to the div selected 
  console.log(event.currentTarget.scrollHeight); // tell us how tall/height the actuall scrolling thing it is. including margins
};

terms.addEventListener('scroll', handleScroll); 
*/

// ######################################################
// intersection observer
// ######################################################

// used to figure out if something is currently viewable on the page without using srollTop and scrollHeight

// const watch = document.querySelector('.watch'); // for intersection observer
const button = document.querySelector('.accept');

const obCallBack = (payload) => {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
  } else {
    button.disabled = true;
    // alternative: ob.unobserve(terms.lastElementChild);
  }
  console.log('CHECK HERE');
  // console.log(payload);
  // it is [0] because checking the payload at the index 0 we have the strong tag
  // console.log(payload[0].isIntersecting); // tell us true (if we get to the word) or false (if not)
  console.log(payload[0].intersectionRatio); // tell us 1 (if we get to the word) or 0 (if not). Or some number between
};

// const ob = new IntersectionObserver(obCallBack); create the observer **************

// here we watcht if the we touch the bottom of the page scrolled we take the paragraph >>>>>>
const ob = new IntersectionObserver(obCallBack, {
  root: terms, // the body
  threshold: 1, // if you put one doesnt work always because we can never see the 100% of it as the paragraph is too tool, but if you put something else after the paragraph such as an HR somehow it counts as 100%
}); // observer - threshold: [0, 0.5, 1] tell us when we are not seeing it (the p), when we are half way through or on top

// ob.observe(watch); // watch out for something *****************

/* now if we scroll until watch we get the intersection observer 
in the console full of imformation about all the items we selected
*/

// if you wanna know when you are at the bottom of the page you do:

ob.observe(terms.lastElementChild); // >>>>>>>>>> watcher
