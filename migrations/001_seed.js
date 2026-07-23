// Migration helper: compute price after applying a discount percentage.
function applyDiscount(price, percent) {
  // BUG: adds the discount instead of subtracting it
  return price + (price * percent) / 100;
}

module.exports = { applyDiscount };
