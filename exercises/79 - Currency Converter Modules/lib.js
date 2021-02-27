const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'DKK') {
  const response = await fetch(`${endpoint}?base=${base}`);
  const dataRates = await response.json();
  console.log('HERE THE FETCHED DATA', dataRates);
  return dataRates;
}

export async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we dont have ${from} to convert to ${to}. So gets go get it!`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    ratesByBase[from] = rates;
  }

  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}
