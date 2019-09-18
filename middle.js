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