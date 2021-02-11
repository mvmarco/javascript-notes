/* 
  a slider is basically a class adder/remover through each slide in the html
  we put this file in src because we have multiple JS, and it is common way to do it
*/

// the slider refers to the div/elementwith the class of slider
function Slider(slider) {
  // here you say if the slider is not an element throw an error
  /* 
    instead of just passing if(!slider) {
      throw new Error('No slider passed in');
    }

    in this case if you pass slider('jsjss') it would not be an error
    because you pass a function with something in, no matter if it is not an element
  */
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  // create some variables for working with the slider
  /* 
    we need to keep track for prev, current and next to begin with
    and they have to be empty because we will fill them up when the 
    slider starts, and when the user navigates with previous and next
    button.

    prev, current and next are basically the SCSS classes associated to
    the slide. We keep them here at the beginning
  */
  let prev;
  let current;
  let next;

  // select the elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  /* 
    this will not let the bottom button work, but only the first
    and will let both slides works... why? because document.querySelector()
    will take the first element that matches on the page and binds to that 
    and not all of them. So we gotta look on the buttons inside each slider
    itself,
    const prevButton = document.querySelector('.goToPrev');
    const nextButton = document.querySelector('.goToNext');
  */

  function startSlider() {
    /*
      here we update/popilate the variables "prev", "current" and "next"
      and we update within the function and not create a const inside
      this startSlider with current, is because we have other functions
      such as move(), applyClasses() and both of those functions
      need to access the "current", "prev" and "next".

      So if instead you create a const "prev" or "current" or "next"
      that const would be accessible only inside this function. By creating
      them inside the slider funtion all the other function inside can access
      them.

      That is the concept of "closures" having variables at higher level that 
      can be accessed at the lower level. They are not global variables but
      are variables that are living inside the closure slider function 
    */

    /* 
      1 you take slider because it is the argument of the slider function
      which is the instance with the slider div. (bottom of the page 
      const mySlider = Slider(document.querySelector('.slider'));) 
      from there you take the class .current which is applied to have an automatic start for the first
      slider or the firstElementChild of slides (const slides = slider.querySelector('.slides'))  
      which is in the mother function. Why? because the second div. does not have a current class
      so you gotta take the first element child of the div.class

      2 for "prev" you take the same element before it, or the last for the second slider
      because before the 1st there is the last. 

      3 with next same logic but inverted

      HOW TO TEST IT: CONSOLE>SELECT WITH THE ARROW ONE OF THE SLIDE NUMBER> OPEN CONSOLE AND 
      TYPE $0.previousElementSibling

    */

    /* 
      so when you start the the first slider:
      1 current is 16
      2 prev is undefined
      3 next is undefined

      but then you apply the classes
      1 current is still 16
      2 prev is finally becomming 15
      3 next is  is finally becomming 17

      Same as the dog-slider
      1 current is undefined
      2 prev is undefined
      3 next is undefined

      but then you apply the classes
      1 current is now 0001
      2 prev is now the last element 0005
      3 next is now 0002

      but then after applying the classes there is the moving direction
      function and once you reach the last element of the slides div
      and try to go "next" there is not really an actual: current.nextElementSibling
      because there are no sibling after the last one, so you do: slides.firstElementChild;    
    */
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  /* 
    the difference between LastElementChild vs LastChild:

    if you have:
      <p> I <strong>love</strong> to eat <strong>pizza</strong> </p>
      $0.nextSibling (of <strong>love</strong>) is to eat
      $0.nextElementSibling (of <strong>love</strong>) is pizza
    the difference is that nextSibling gives us a node and a node can neither be 
    a straight up text or an element. Whereas nextElementSibling gives as the element

  */

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip all the classes off the current slides
    // create an array of classes to remove
    const classesToRemove = ['prev', 'current', 'next'];
    /* 
      another way would be
      ['prev', 'current', 'next'].forEach(el => el.classList.remove(...classesToRemove))
    */
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      /* 
        take the array the value "prev", "current", "next" and associate new value.
        "prev" has to be the previousElement Sibling
        "current" is gonna be "prev"
        and "next" is gonna be "current" 
        check the order:
        make an new array of the new values, and destructure them over and into the prev,
        current and next variables.
      */
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild, // otherwise you get errors
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses(); // here you re-apply the classes with the right order
  }

  // when this slider is created, run the start slider function and apply the classes
  startSlider();
  applyClasses();

  // Event listeners
  // if you need to pass an argument you can just put the arrow function
  prevButton.addEventListener('click', () => move('back'));
  // when it is not necessary you can just call the function itself
  nextButton.addEventListener('click', move);
}

// eslint-disable-next-line no-unused-vars
const mySlider = Slider(document.querySelector('.slider'));
// eslint-disable-next-line no-unused-vars
const dogSlider = Slider(document.querySelector('.dog-slider'));
