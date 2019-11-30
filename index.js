exports.add = add;
exports.subtract = subtract;

function add(a, b) {
  if (!a || !b) {
    throw new Error('Missing arguments');
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (!a || !b) {
    throw new Error('Missing arguments');
  } else {
    return a - b;
  }
}
