export const last = 'buddy';
export const last2 = 'corapi: this is a surname as exported variable';

const last3 =
  "svanholm: this is surname as exported variable with 'named export' - bottom of the page";

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

const first = 'marco'; // we export this as default
// #####################################################
// NAMED EXPORTS - we can have as many items as we want
// #####################################################

export { last3 };

/* 
  you could also export all the const or function you have:

  const last = 'buddy';
  const last2 = 'corapi: this is a surname as exported variable';
  const last3 =
  "svanholm: this is surname as exported variable with 'named export' - bottom of the page";

  with "NAMED exports"

  export {last, last2, last3}
*/

// #########################################################
// DEFAULT EXPORTS a module can also have one default thing
// #########################################################

// check the file "marco.js"

/* 
  the difference is that "named exports", you must know what they've exported as.
  But "default exports" since there is one per file, you can name them as you want
  and you do not use {}. if that module does one thing, you use default - if that module
  does multiple things use the named
*/

export default first;
