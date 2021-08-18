const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const divide = function() {
	return a / b;
};

const multiply = function(a, b) {
  return a * b;
};

function operate(a, b, operator) {
  switch(operator) {
    case 'add':
      return add(a, b);
      break;
    case 'substract':
      return substract(a, b);
      break;
    case "multiply":
      return multiply(a, b);
      break;
    case "divide":
      return divide(a, b);
      break;
  }
}

/* const power = function() {
	
};

const factorial = function() {
	
};

module.exports = {
  add,
  subtract,
  divide,
  multiply,
  power,
  factorial
}; */
