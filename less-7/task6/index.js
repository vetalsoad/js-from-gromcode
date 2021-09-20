const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  /* const newArr = arr.slice(); */
  return arr.slice().reverse();
  
}
const numbs = [1, 2, 3, 4, 5];
console.log(numbs);
console.log(reverseArray(numbs));
