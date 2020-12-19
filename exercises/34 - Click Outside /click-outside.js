const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

const handleButton = (event) => {
  const button = event.currentTarget;
  const card = button.closest('.card'); // this take the closest element to the one you selected
  // if you select/inspect a random element then go to the console and do $0.closest('div'); get an idea
  // grab the image src and description of the card
  const imgSrc = card.querySelector('img').src;
  const dsc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  console.log(name);
  // populate the modal with new info
  modalInner.innerHTML = `<img width='600' height='600' src=${imgSrc.replace(
    200,
    600
  )} alt= ${name} />
  <p>${dsc}</p>`;
  // show the modal
  modalOuter.classList.add('open');
};

cardButtons.forEach((button) => {
  button.addEventListener('click', handleButton);
});

/* 
 
 now for closing the modal you gotta click outside
 with the technich called click outside
 
 */

const closeModal = () => {
  modalOuter.classList.remove('open');
};

const handleCloseModal = (event) => {
  // const isOutside = event.target.closest('.modal-inner'); // so if you click the modal-inner it will return the value if you click outside you will get null
  const isOutside = !event.target.closest('.modal-inner'); // if it is not inside = it is outside, this will reurn true when clicked outside
  // console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
};

modalOuter.addEventListener('click', handleCloseModal);

window.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
