const fromInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest';
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
  console.log('HERE THE OBJECT CURRECIES ITSELF', options); // we see the object, we can loop over with for or loop, object.entries object.value object.keys
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

console.log('HERE THE HTML COMING FROM THE OBJECT', optionsHTML); // ****

// ##############################
// STEP 3
// ##############################

// get the data with a function that fetch retrieve the rates
/* 
the way that the endpoint: 'https://api.exchangeratesapi.io/latest' works is that you can
add ?base=DKK and it will convert all the currencies in the correspective amount of "DKK"
offocurse you can change it. Here the example: 'https://api.exchangeratesapi.io/latest?base=DKK';
*/

async function fetchRates(base = 'DKK') {
  const response = await fetch(`${endpoint}?base=${base}`);
  const dataRates = await response.json();
  console.log('HERE THE FETCHED DATA', dataRates);
  /*
  you can call the fetchRates(); like this in the broswer and you can see that 
  "dataRates" is a Promise, since it is an async function, and by clicking "rates"
  you get all the "rates" converted with the existing value of our base
  
  */
  return dataRates;
}
// ##############################
// STEP 3
// ##############################

// ##############################
// STEP 4
// ##############################

// make a convert function
/* 
we could fetch the data each time but it could be a little bit slow:
just imaging everytime the user types a number we are calling the converting function
then automatically we have to fetch the data. If the user types 5 numbers we fetch 5 times
for the same currency. and first gets slow, secondly there are limits of request per hour
that a user can make according to most of the APIs.

The solution would be to "cache" the rates meaning that you need to hold on to them
if you already have them and there are different techniques you can do that. 
What we are gonna do is create an object (check above) const ratesByBase = {};
and what it does is storing all the rates in it.
*/
async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency.
  /* 
  the way that works is, we take the "ratesByBase" object and we put in the "base" which
  is another object containing all the currencies converted with the correspective value,
  1 DKK = 1 DKK ~ 1DKK = 0,13 EUR etc etc 
  
  ratesByBase = {
    DKK: {
      DKK: 1,
      EUR: 0.13,
    }
  };
  
  and as soon as someone change the "base", "their from" we will:
  
  ratesByBase = {
    DKK: {
      DKK: 1,
      EUR: 0.13,
    },
    SEK: {
      SEK: 1,
        EUR: 0.09,
      },
    };
    
    so eventually if the user will cycle over this we'll have a massive "ratesByBase" object
    that will contain all of the rates by their "base" or "from value"
    */

  // first check if we even have the rates to convert from that currency.
  // if (!ratesByBase.DKK) but we do not know if it is DKK so we do:
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we dont have ${from} to convert to ${to}. So gets go get it!`
    );
    const rates = await fetchRates(from); // from is the base
    console.log(rates);
    // store them for next time
    ratesByBase[from] = rates;
  }

  /*
      if in the console we pass: "convert(10, 'DKK', 'EUR')"; we get dont have it but then we add it
      to the object "ratesByBase, in the console "ratesByBase", will have now the rates requested.
      if we log again: "convert(10, 'DKK', 'EUR')"; now we do not get anymore:
      `Oh no, we dont have ${from} to convert to ${to}. So gets go get it!`
      */

  /* 
     here belowe we convert that amount they passed it. Basically, we go to "ratesByBase.DKK"
     for instance, and from there we need to get the "rates.EUR" (the user wants to convert)
     since we do not know we pass the square [] with from and to. Check in the console what
     put under ""
     */
  const rate = ratesByBase[from].rates[to]; // this is essentially the value for 1 DKK in other currencies: EXAMPLE
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}
// ##############################
// STEP 4
// ##############################

// ##############################
// STEP 5
// ##############################

/* 
we have to listen for when the user put a new amount to convert,
when the user changes the currency to convert an from which one.
or we can listen for the whole form as a trick. In other words we listen for an
input event on the for, and that will cover all of them.

first select the form: const form = document.querySelector('.app form');
then create the eventListener
populate the options element
and calling the function
*/
function formatCurrency(amount, currency) {
  // return Intl.NumberFormat('en-US'), // you can also leave blank the language but it will not take the sign of the currency
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency, // which is the currency you passed in: like: currency: currency,
  }).format(amount);
}
async function handleInput(e) {
  console.log(e.target); // this is what you actually change, keep changing
  console.log(e.currentTarget); // this is always the form, never change
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value); // handle format API to format currency
}

// ##############################
// STEP 2
// ##############################

// now we gotta populate the options element
const optionsHTML = generateOptions(currencies); // calling the function
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
// STEP 2
// ##############################fromSelect.innerHTML = optionsHTML;
form.addEventListener('input', handleInput); // input event on a form will cover all the input on that form
// ##############################
// STEP 5
// ##############################
