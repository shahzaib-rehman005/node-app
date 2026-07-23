const test = require('node:test');
const assert = require('node:assert');
const { applyDiscount } = require('./001_seed');

test('applyDiscount subtracts the discount', () => {
  assert.strictEqual(applyDiscount(100, 20), 80);
});
