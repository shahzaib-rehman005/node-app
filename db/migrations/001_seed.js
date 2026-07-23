// DB migration helper: price after discount percentage.
function applyDiscount(price, percent) {
  // BUG: adds the discount instead of subtracting it
  return price + (price * percent) / 100;
}

module.exports = { applyDiscount };
