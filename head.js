const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

let head = function(array) {
  let firstElement;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      firstElement = array[0];
      return firstElement;
    }
  } else {
    return undefined;
  }
};

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");