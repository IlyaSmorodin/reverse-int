const assert = require('assert');

const reverse = require('./index');

it('Should return 261 when 162 given', () => {
  const reversed = reverse(162);

  assert.equal(reversed, 261);
});

it('Should return 71 when 170 given', () => {
  const reversed = reverse(170);

  assert.equal(reversed, 71);
});
it('Should return 605 when 506 given', () => {
  const reversed = reverse(506);

  assert.equal(reversed, 605);
});

it('Should return 465 when 564 given', () => {
  const reversed = reverse(564);

  assert.equal(reversed, 465);
});




it('Should return 332 when 233 given', () => {
  const reversed = reverse(233);

  assert.equal(reversed, 332);
});

it('Should return 25 when 520 given', () => {
  const reversed = reverse(520);

  assert.equal(reversed, 25);
});
it('Should return 822 when 228 given', () => {
  const reversed = reverse(228);

  assert.equal(reversed, 822);
});


it('Should return 561 when 165 given', () => {
  const reversed = reverse(165);

  assert.equal(reversed, 561);
});

it('Should return 535 when 535 given', () => {
  const reversed = reverse(535);

  assert.equal(reversed, 535);
});

