/* 
  import currencies from './ondemandImports.js';

  export function handleButtonClick(event) {
    console.log(currencies); // in network/all you see all the script modules that have been loaded.
    // including currencies
  }

  so how do we load on demand what we need? with async
*/

export async function handleButtonClick(event) {
  const currenciesModule = await import('./ondemandImports.js');
  console.log(currenciesModule.default); // now only when you click the currencies will be loaded

  /* 
    if you do it without defaul you gotta click the object, and then you see that default
    contains all the currencies. That is what we want.
  */
}
