function myFunction(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Operands must be numbers";
  }
  return a - b;
}

console.log(myFunction(10, 5)); // 5
console.log(myFunction(10, "5")); // "Invalid input: Operands must be numbers"
console.log(myFunction(true, false)); // "Invalid input: Operands must be numbers"