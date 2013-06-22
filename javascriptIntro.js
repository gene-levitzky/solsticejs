///////////////////
//// VARIABLES ////
///////////////////

var x = 1;

console.log(x); // prints "1"

x = "Now it's a string";

console.log(x); // prints "Now it's a string"

x = 'you can also use single quotes for strings';

// Arrays are easy to declare
// And they can hold objects of any type
var array = ["this", 'is', "an 'array'", 3, true];
console.log(array); // Should print "['this', 'is', 'an \'array\'', 3, true]"
// It gets weird though
// You can specify keys like this:
array["someKey"] = "someValue";

// So you can access "someValue" by doing array["someKey"] OR array.someKey (without quotes)
// You can also access the first 5 elements by doing array[0] ... array[4] 
// OR by doing array["0"] ... array["4"] 

console.log(array); // should print "['this', 'is', 'an \'array\'', 3, true, someKey: 'someValue']"

///////////////////
//// FUNCTIONS ////
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




/////////////////
//// OBJECTS ////
/////////////////


// Coming soon...



// To "run" this script, open a command prompt and navigate to the directory where this file is
// Then run the command "node javascriptIntro.js"