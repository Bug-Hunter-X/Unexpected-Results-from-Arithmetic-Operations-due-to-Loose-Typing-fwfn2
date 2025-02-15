function myFunction(a, b) {
  return a - b; // This will cause unexpected results with non-numbers
}

console.log(myFunction(10, "5")); // NaN
console.log(myFunction(true, false)); // NaN