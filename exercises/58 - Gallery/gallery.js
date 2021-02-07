/* 
  first thing we need to do is to create a closure:
  in other words, the ability to create a function that has a function inside where
  there is the ability to access a parent level scope (parent function) from a child scope
  even after the parent function has been terminated

  example:
  
  const gallery = (gallery) => {
    const buttons = gallery.querySelectorAll('button');
    function showNextImage() {
      console.log('test');
     }
   };
   
   You can use the buttons variable even outside of the function,
   even after has been run or closed (that is why it is called closure)
   the inner function can be used for clicking event associated to the parent function
  */

// this function is connected on the bottom of the page with the query selectors
function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!'); // this shows error in the console
  }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img')); // Array.from because you loop over with forEach
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Madal already open');
      return; // stop the function from running
    }
    modal.classList.add('open');

    // Event listeners to be bound when we open the modal:
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard..
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }
  // #############################
  // first function
  // #############################
  // el is element, an element which reference an image tag somewhere on the page
  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    // otherwise we update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // These are our Event Listeners!
  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );

  // loop over each image
  images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener('keyup', (e) => {
      // when that is keyup'd, check if it was enter
      if (e.key === 'Enter') {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

// Use it on the page
/* 
  this refers to the first function written on top of the page
*/
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
