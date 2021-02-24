const fromInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const ratesByBase = {};

// currecy codes to understand what code stands for, we use it to populate the drop down list
const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

// ##############################
// STEP 1
// ##############################

// function that generate options, that populate the drop down
// option is gonna be an object (curreciens), the object that has the currencies
function generateOptions(options) {
  console.log(options); // we see the object, we can loop over with for or loop, object.entries object.value object.keys
  // we turn the object into an array with "Object.entries"
  /* 
    return Object.entries(options); **
    if we log this result ** outside of the function when we call generateOptions(currencies)
    we got an "array" were each element is another array with ["code" and "name of the code"]
    so for this big array with can create a new array were we take from
    each element the key and the value and we put it into the HTML:

    .map((array)  => {
      const currencyCode = array[0];
      const currencyName = array[1];
      return `<option value="${currencyCode}">${currencyCode} ${currencyCode} ${currencyName}</option>`
    }).join('');

    remembering that Map(): takes in a function where the params can be, value, index and array.
    by descructuring the above map() on line 56 you can pass insted of the array the const
    names that are reffering to the corresponding indexes of each element.
    But they have to be inside a square!!!!!!!!!!!brakets []. In the same way we do:

    const guitars = ["gretsch", strat", "tele"] // array

    instead of saying: example: gretsch = guitars[0]  // without descructing
    you can say: const [gretsch] = guitars // any name ~~ const [firstGuitar] = guitars

    another example: const [a, b, c] = guitars;

    anyway as result in both cases of the usage of map() we get a new big array
  */
  return Object.entries(options)
    .map(
      ([code, name]) =>
        // console.log(code, name)
        `<option value="${code}">${code} - ${name}</option>`
    )
    .join(''); // we turn the array into string so into HTML
}

const optionsHTML = generateOptions(currencies);
console.log(optionsHTML); // ****

// ##############################
// STEP 2
// ##############################

// now we gotta populate the options element
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
/* 
  if we were to do:
  fromSelect.innerHTML = generateOptions(currencies);
  toSelect.innerHTML = generateOptions(currencies);

  then you'd run the function twice which is unnecessary and bad practice. So just run it once
  store it into a variable and pop it in
*/

// ##############################
// STEP 3
// ##############################

// get the data with a function that fetch retrieve the rates

async function fetchRates(base = 'DKK') {}
