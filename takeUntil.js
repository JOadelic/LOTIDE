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

let assertArraysEqual = function(a1, a2) {
  const a = eqArrays(a1, a2);
  if (a === true) {
    console.log(`✅ ${a1} === ${a2}`);
  } else {
    console.log(`❌ ${a1} !== ${a2}`);
  }
};

const takeUntil = function(array, callback) {
  let finalArray = [];
  for (let item of array) {
    if (callback(item)) {
      return finalArray;
    } else {
      finalArray.push(item);
    }
  } return finalArray;
};


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
