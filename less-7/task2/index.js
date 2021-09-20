/* function sortDesc(array) {
  let resultArray = array.slice();
  return resultArray.sort(function (a, b) {
    return a - b;
  });
}

console.log(sortDesc([1, 25, 64, 3]));
 */
const sortDesc = arr =>
  arr.slice().sort((a,b) => (b - a));

console.log(sortDesc([1, 25, 64, 3]));
