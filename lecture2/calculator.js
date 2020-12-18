function add (x, y) {
  console.log(x, y);
  return x + y;
}

function div (x, y) {
  return x / y;
}

function sub (x, y) {
  return x - y;
}

function multi (x, y) {
  return x * y;
}

module.exports = {
  add,
  div,
  sub,
  multi
};
