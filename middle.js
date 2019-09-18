/*
let eqArrays = function(array1, array2) {
  // console.log(array1.join());
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
*/
const middle = function(array) {
  let center = [];
  let length = array.length;
  

  if (length < 3) {
    return center;
  } else if (length % 2 !== 0) {
    center.push(array[Math.floor(array.length / 2)]);
    return center;
  } else if (length % 2 === 0) {
    center.push(array[Math.floor((array.length - 1) / 2)]);
    center.push(array[Math.floor(array.length / 2)]);
    return center;
  }
}




console.log(middle([1, 2, 3, 5, 6])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]