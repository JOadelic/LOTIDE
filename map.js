const words = ["ground", "control", "to", "major", "tom"];
const moreWords = ["ground", "control", "to", "major", "tom"];
const lessWords = ["ground", "control", "to"];
const stuff = ['bike', 'helmet', 'hockey bag'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(lessWords, word => word[0]);

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

console.log(assertArraysEqual(results1, [ 'g', 'c', 't']));
