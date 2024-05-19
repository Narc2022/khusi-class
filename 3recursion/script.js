// A recursive function is a function that calls itself somewhere within the body of the function.
//  Below is a basic example of a recursive function.
const arr = [
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  1,
  2,
  3,
  4,
  5,
  "sachin",
  "khusi",
  "khusi",
  "khusi",
  "khusi",
];
const fval = "sachin";

// function recursiveFunc(arr) {
//   if (arr.length === 0) {
//     console.log("array have no values");
//     return;
//   }
//   console.log("arr", arr[0]);
//   recursiveFunc(arr.slice(1));
// }

// recursiveFunc(arr);

const filterValue = arr.filter((item) => item === fval);

console.log("filterValue", filterValue);
