// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(5, 1);
assertEqual([1, 2, 3], [1, 2, 3]);