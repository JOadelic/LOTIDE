const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

let randomObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKeys = function(object, callback) {
  
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  } return undefined;
};

assertEqual(findKeys(randomObject, x => x.stars === 3), 'Akaleri');
