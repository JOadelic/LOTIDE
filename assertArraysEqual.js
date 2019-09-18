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

assertArraysEqual([1, 3, 3], [1, 2, 3]);
