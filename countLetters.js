// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let finalObject = {};

  for (let i of string) {
    if (i === " ") {
      i++;
    }else if (finalObject.hasOwnProperty(i)) {
      finalObject[i]++;
    } else {
      finalObject[i] = 1;
    }
  } return finalObject;
};

console.log(countLetters('lighthouse in the house'));