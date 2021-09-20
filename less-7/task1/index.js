/* function getSpecialNumbers(array) {
  let resultArray = array.filter(function (el) {
    if (el % 3 === 0) {
      return el;
    }
  });

  return resultArray;
}
console.log(getSpecialNumbers([1, 2, 3, 4, 5, 1, 2])); */

const getSpecialNumbers = array =>
  array.filter(num => num % 3 === 0);

