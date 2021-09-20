const reverseArray = (arr) => {
  if (!Array.isArray(arr)){
    return null;
  }
  
  const newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    newArr.unshift(arr[index]);
    }
    return newArr;
}
const massive = [1,2,3,4,5]
console.log(massive);
console.log(reverseArray(massive));