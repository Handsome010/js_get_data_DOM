'use strict';

const pop = [...document.body.querySelectorAll('span.population')];
const values = [];

for (const item of pop) {
  values.push(+item.textContent.replaceAll(',', ''));
}

const sum = values.reduce((acc, item) => acc + item, 0);

document.body.querySelector('span.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  sum / values.length.toLocaleString('en-US');
