/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Returns the difference between two numbers.
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Returns the product of two numbers.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Returns the quotient of two numbers.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

// Expose to window so the HTML script can call it
const calculator = window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
};

calculator.sum = sum;
calculator.subtract = subtract;
calculator.multiply = multiply;
calculator.divide = divide;
