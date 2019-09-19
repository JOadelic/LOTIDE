const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


let arrayObject2 = { c: "1", d: ["2", 3] };
let arrayObject = { c: "1", d: ["2", 3, 4, 5] };

let me = {firstName:"Jordan", lastName:"Owens", age:33, eyeColor:"brown"};
let person = {firstName:"Jordan", lastName:"O", age:33, eyeColor:"brown"};

assertEqual(eqObjects(arrayObject2, arrayObject), false);
//assertEqual(eqObjects(me, person), true);
// assertEqual(eqObjects(person, me), false);
//assertEqual(eqObjects(b, abc), false);
console.log(arrayObject2["d"][0]);