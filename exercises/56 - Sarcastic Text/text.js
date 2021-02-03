// we use the name to select all of them
const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]')); // you get the input#funky eg
console.log('LOOOOOOK here', filterInputs);
/* eslint-disable */
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};
/* eslint-enable */

const filters = {
  sarcastic(letter, index) {
    // if it is odd, it will return 1, and that is truthy, so this if statement will trip
    if (index % 2) {
      return letter.toUpperCase();
    }
    // if it is even, it will return zero and we will lowercase it
    return letter.toLowerCase();
  },
  funky(letter) {
    // first check if there is a funky letter for this case
    let funkyLetter = funkyLetters[letter];
    if (funkyLetter) return funkyLetter;
    // if there is not, check if there is a lowercase version
    funkyLetter = funkyLetters[letter.toLowerCase()];
    if (funkyLetter) return funkyLetter;
    // if there is nothing, return the regular letter
    return letter;
  },
  unable(letter) {
    const random = Math.floor(Math.random() * 3);
    if (letter === ' ' && random === 2) {
      return '...';
    }
    return letter;
  },
};

/* 
  this function wil take in some text
  and update the text
*/
function transformText(text) {
  // const filter = document.querySelector('[name="filter"]:checked').value; // take the filter and check if it is checked and get the value
  const filter = filterInputs.find((input) => input.checked).value;
  console.log(filter); // you get sarcastc funky or unable in other words the value="funky" eg
  // take the text, and loop over each letter.
  // take the text and convert it into an array
  const mod = Array.from(text).map(filters[filter]); // you convert the node list from the user to an array
  // and we find the value looping over of each input function and find the one with the checked attribute
  console.log('look also here', mod);
  result.textContent = mod.join('');
}

textarea.addEventListener('input', (e) => transformText(e.target.value));

// loop over each inputs and when the user check the value the text is updated
filterInputs.forEach((input) =>
  input.addEventListener('input', () => {
    transformText(textarea.value); // it is in the html
  })
);
