const eqObjects = function(object1, object2) {
  let objectOne = Object.keys(object1);
  let objectTwo = Object.keys(object2);

  if (objectOne.length === objectTwo.length) {
    for (let keyName of objectOne) {
      if (Array.isArray(objectOne[keyName])) {
        for (let index in objectOne[keyName]) {
          if (objectOne[keyName][index] !== objectTwo[keyName][index]) {
            return false;
          }
        }
      } else if (object1[keyName] !== object2[keyName]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  //const inspect = require('util').inspect; 

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

let object = { c: "1", d: ["2", 3, 4, 5] };
let anotherObject = { c: "1", d: ["2", 3, 4, 5, 6] };
let objectAgain = {firstName:"Jordan", lastName:"Owens", age:33, eyeColor:"brown"};
let randomObject = {firstName:"Jordan", lastName:"Owens", age:33, eyeColor:"brown"};
console.log(assertObjectsEqual(eqObjects(object, randomObject), false));
