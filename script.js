//1.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum1(array) {
  if (array.length === 1) return array[0];
  return array[0] + sum1(array.slice(1));
}

function sum2(array) {
  return array.length === 1 ? array[0] : array[0] + sum2(array.slice(1));
}

console.log(sum1(arr));
console.log(sum2(arr));


//2.

//3.

//4.

//5.
