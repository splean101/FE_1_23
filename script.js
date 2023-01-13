//1.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sum1(array) {
//   if (array.length === 1) return array[0];
//   return array[0] + sum1(array.slice(1));
// }

// function sum2(array) {
//   return array.length === 1 ? array[0] : array[0] + sum2(array.slice(1));
// }

// console.log(sum1(arr));
// console.log(sum2(arr));

//2.
function deepCount1(array) {
  let sum = array.length;
  for (const el of array) {
    if (Array.isArray(el)) {
      sum += deepCount1(el);
    }
  }
  return sum;
}

function deepCount2(array) {
  let sum = array.length;
  for (const el of array) {
    Array.isArray(el) ? (sum += deepCount1(el)) : null;
  }
  return sum;
}

console.log(deepCount1([])); //0
console.log(deepCount1([1, 2, 3])); //3
console.log(deepCount1(['x', 'y', ['z']])); //4
console.log(deepCount1([1, 2, [3, 4, [5]]])); //7
console.log(deepCount1([[[[]]]])); //3

console.log(deepCount2([])); //0
console.log(deepCount2([1, 2, 3])); //3
console.log(deepCount2(['x', 'y', ['z']])); //4
console.log(deepCount2([1, 2, [3, 4, [5]]])); //7
console.log(deepCount2([[[[]]]])); //3
//3.

//4.

//5.
