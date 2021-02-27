// FIRST STEP CONVERT THE HTML SCRIPT TO MODULE
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

import { fromSelect, toSelect } from './elements.js';

const form = document.querySelector('.app form'); // not in the elements because we need it here for the event

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
