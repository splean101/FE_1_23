//1.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = arr.length;
let sum = 0;

function sum1(arr) {
  if (i > 0) {
    i--;
    sum += arr[i];
    console.log('i', i);
    console.log('sum ', sum); //55
    sum1(arr);
  } else {
    console.log('else sum ', sum); //55
    return sum;
  }
}

console.log(sum1(arr)); //underfined
console.log(sum); //55

//2.

//3.

//4.

//5.
