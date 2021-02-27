// #############################
// LIBRARY
// #############################

// library is essentially all the core part of what the application does
// here we add the loader params because it was requested
// named export

export async function fetchJoke(loader) {
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);

  loader.classList.add('hidden');
  return data;
}
