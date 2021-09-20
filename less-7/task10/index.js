/* const sum = (arr) => {
  if(!Array.isArray){
    return null;
  }
  arr.reduce (newArr = (acc, num) => {
      return acc + num;

  },0)

} */

const arr = [2, 5, 6, 3, 0, 3, -1];


const sum = arr => {
   if (!Array.isArray(arr)) {
     return null;
   } 
  return arr.reduce((acc, num) => acc + num);
  };
 


console.log(arr);
console.log(sum(arr));