export async function handleInput(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value); // handle format API to format currency
}
