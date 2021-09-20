function checkSum(arr){
  if (!Array.isArray(arr)) {
    return null;
  }
  let summ = 0;
  for (let index = 0; index < arr.length; index += 1) {
    summ+= arr[index];
  }
return (summ > 100);
}
checkSum([3,5,10]);
console.log(checkSum);