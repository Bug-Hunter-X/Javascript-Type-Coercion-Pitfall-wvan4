function foo(a, b) {
  //Explicitly convert inputs to numbers
  a = Number(a);
  b = Number(b);

  //Check if both inputs are valid numbers
  if(isNaN(a) || isNaN(b)){
    return "Invalid Input";
  }
  return a + b;
}

console.log(foo(5, '5')); // Output: 10
console.log(foo(5, 5)); // Output: 10
console.log(foo('a',5)); //Output: Invalid Input