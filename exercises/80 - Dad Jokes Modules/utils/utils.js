// #############################
// UTILS
// #############################

// Utils is essentially all the part that not really core part but are important, or all the
// function that can be reused

// named export
export function randomItemFromArray(array, whatShouldNotBe) {
  const item = array[Math.floor(Math.random() * array.length)];
  if (item === whatShouldNotBe) {
    console.log('aah we used that one last time, look again');
    return randomItemFromArray(array, whatShouldNotBe);
  }
  return item;
}
