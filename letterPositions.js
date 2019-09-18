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


const letterPositions = function(sentence) {
  const results = {};
  let indexPosition;
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === " ") {
      i++;
    } else if (results.hasOwnProperty(letter)) {
      indexPosition = i;
      results[letter].push(indexPosition);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));
console.log(assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]));
