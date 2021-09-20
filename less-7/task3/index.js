/* const flatArray = (arr) => {
  // put your code here
  let resultArr = arr.flat(1);
  return resultArr.sort(function (a, b) {
    return a - b;
  });
};
let inputArr = [1, [1, 3], [1, 2]];

console.log(flatArray(inputArr));
 */

const flatArray = arr => 
  arr.flat().slice().sort((a,b) =>(a-b));

let inputArr = [1, [4, 3], [5, 6]];

console.log(inputArr);
console.log(flatArray(inputArr));