///////////////////
//// Variables ////
///////////////////

var x = 1;

console.log(x); // prints "1"

x = "Now it's a string";

console.log(x); // prints "Now it's a string"

x = 'you can also use single quotes for strings';

// Arrays are easy to declare
// And they can hold objects of any type
var array = ["this", 'is', "an 'array'", 3, true];




///////////////////
//// Functions ////
///////////////////

// Functions can be declared in two ways:

function addition (a, b) {
  return a + b;
}

var substraction = function (a, b) {
  return a - b;
}

// The first way is preferred.

// A neat feature of JS is that functions can take functions as parameters:

function outterFunction (inner, param1, param2) {
  return inner(param1, param2);
}

var result = outterFunction(addition, 5, 5);

console.log(result); // Should print 10

// JS functions also need not take all parameters
// For example, you can call addition(1)
// You'll just get a NaN result.
// You can also call it with more parameters than specified
// For example, you can call addition(1,1, "random string")
// And the result will be 2, since the function doesn't check for a third parameter.


