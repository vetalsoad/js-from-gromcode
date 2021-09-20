const checker = (arr) =>{
  if (!Array.isArray(arr)) {
    return null;
  }
  let max = 0;
  let min = Infinity;
  for(let index = 0; index < arr.length; index +=1){
    if(arr[index] > max){
      max = arr[index];
    } 
    if(arr[index] < min){
      min = arr[index];
    }
  }
  return (max + min) > 1000;
}
const masive = [2,5,9,11, 6, 7,99, 76, 1000];
console.log(checker(masive));
