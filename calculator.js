const buttons = document.querySelector("#buttons");
const out = document.querySelector("#output");

let number1 = 0;
let number2 = 0;
let operator;
let switchNumbers = 0;
let forceEval = 0;
let decimal = 0;
let multiplier = 10;
let decimalMultipler = 1;


buttons.addEventListener("click", evaluate);

function evaluate(e) {
  if (e.target !== buttons) {
    if (e.target.outerText === "AC") {
      clear(0);
    } else if (e.target.classList[1] === "number") {
      setNumber(e);
    } else if (e.target.classList[1] === "operator") {
      setOperator(e);
    } else if (e.target.classList[1] === "equals") {
      equals();
    } else if (e.target.classList[1] === "sign") {
      changeSign();
    } else if (e.target.classList[1] === "decimal") {
      decimal = 1;
    }
  }
}

function setOperator(e) {
  if (forceEval === 1) {
    equals();
  }
  operator = e.target.outerText;
  switchNumbers = 1;
  decimal = 0;
  multiplier = 10;
  decimalMultipler = 1;
}

function setNumber(e) {
  let number = +e.target.outerText;
  if (decimal === 1) {
    number *= 0.1 / decimalMultipler;
    decimalMultipler *= 10;
    multiplier = 1;
  }
  if (switchNumbers === 0) {
    number1 *= multiplier;
    number1 += number;
    out.textContent = round(number1);
  } else if (switchNumbers === 1) {
    number2 *= multiplier;
    number2 += number;
    forceEval = 1;
    out.textContent = round(number2);
  }
}

function equals() {
  evaluation = operate(number1, operator, number2);
  if (evaluation == undefined) {
    return;
  }
  out.textContent = round(evaluation);
  number1 = evaluation;
  clear(1);
  return evaluation;
}

function clear(totalClear) {
  if (totalClear === 0) {
    out.textContent = 0;
    number1 = 0;
  }
  number2 = 0;
  operator = undefined;
  switchNumbers = 0;
  forceEval = 0;
  decimal = 0;
  multiplier = 10;
  decimalMultipler = 1;
}


function operate(a, operator, b) {
  if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "+") {
    return add(a, b);
  } else if (operator === "/") {
    return divison(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  }
}


function round(number) {
  if (number == Infinity) {
    return "Error";
  }
  return parseFloat(number).toPrecision(12) / 1;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divison(a, b) {
  return a / b;
}
