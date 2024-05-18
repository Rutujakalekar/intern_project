let display = document.getElementById('display');
let expression = ""; // Stores the current expression

// Function to append numbers to the display
function appendNumber(number) {
  expression += number;
  updateDisplay();
}

// Function to append operators (+, -, *, /)
function appendOperator(operator) {
  if (expression === "") return; // Don't allow operators at the beginning
  let lastChar = expression[expression.length - 1];
  if (isOperator(lastChar)) {
    // Replace consecutive operators
    expression = expression.slice(0, -1) + operator;
  } else {
    expression += operator;
  }
  updateDisplay();
}

// Function to append special functions (log, exp, sin, etc.)
function appendFunction(func) {
  // Ensure a valid syntax for functions
  if (expression === "" || isOperator(expression[expression.length - 1]) || expression[expression.length - 1] === '(') {
    expression += func + "(";
  } else {
    expression += "*" + func + "(";
  }
  updateDisplay();
}

// Function to append parentheses
function appendLeftParen(paren) {
  if (expression === "" || isOperator(expression[expression.length - 1])) {
    expression += paren;
  } else {
    expression += "*" + paren;
  }
  updateDisplay();
}

function appendRightParen(paren) {
  if (expression === "") return; // Don't allow closing parenthesis without opening one
  expression += paren;
  updateDisplay();
}

// Function to clear the display
function clearDisplay() {
  expression = "";
  updateDisplay();
}

// Function to delete the last character
function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

// Function to update the display with the current expression
function updateDisplay() {
  display.value = expression;
}

// Function to check if a character is an operator
function isOperator(char) {
  return char === "+" || char === "-" || char === "*" || char === "/";
}

// Function to calculate the expression using math.js
function calculate() {
  try {
    let result = math.evaluate(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    expression = "Error";
    updateDisplay();
  }
}

// Function to add Pi (π) to the expression
function appendPi() {
  if (expression === "" || isOperator(expression[expression.length - 1])) {
    expression += Math.PI.toString();
  } else {
    expression += "*" + Math.PI.toString();
  }
  updateDisplay();
}

// Initial display update
updateDisplay();
