'use strict';

const pop = [...document.body.querySelectorAll('span.population')];
const values = [];

for (const item of pop) {
  values.push(+item.textContent.replaceAll(',', ''));
}

const sum = values.reduce((acc, item) => acc + item, 0);

document.body.querySelector('.total').textContent =
  'Total: ' + sum.toLocaleString('en-US');

document.body.querySelector('.average').textContent =
  'Average: ' + Math.round(sum / values.length).toLocaleString('en-US');
