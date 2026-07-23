function add(a, b) {
  // BUG: subtracts instead of adding
  return a - b;
}

module.exports = { add };
