// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function(allItems, itemsToCount) {
  let newObject = {};
  // console.log(itemsToCount);

  for (let value of allItems) {
    // console.log(itemsToCount[value]);
    if (itemsToCount[value]) {
      if (newObject.hasOwnProperty(value)) {
        newObject[value]++
      } else {
        newObject[value] = 1;
      }
    }
  } return newObject;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);