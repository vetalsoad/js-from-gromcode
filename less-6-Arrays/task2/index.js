function getSum(arr) {
 if(!Array.isArray(arr)){
   return null;
  }
  let summ = 0;
  for (let num = 0; num < arr.length; num +=1){
  summ +=arr[num]; 
  }
  return summ;  
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
