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

// function that generate options, that populate the drop down
// option is gonna be an object (curreciens), the object that has the currencies
function generateOptions(options) {
  console.log(options); // we see the object, we can loop over with for or loop, object.entries object.value object.keys
  // we turn the object into an array with "Object.entries"
  /* 
  return Object.entries(options); // **** if we log this result
  outside of the function when we call it
  with got an array were each element is another array with code and name of the code
  so we for each element we can create another array
  */
  return Object.entries(options).map((array) => {
    console.log(array);
  });
}

const optionsHTML = generateOptions(currencies);
console.log(optionsHTML); // ****
