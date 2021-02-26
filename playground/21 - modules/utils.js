export const last = 'buddy';
export const last2 = 'corapi: this is a surname as exported variable';

const last3 =
  "svanholm: this is surname as exported variable with 'named export' - bottom of the page";

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

// NAMED exports

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
