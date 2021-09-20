function squareArray(arr) {
  if (!Array.isArray(arr)){
    return null;
  }
  const arrSquare = [];
  for(let index = 0; index < arr.length; index += 1){
    arrSquare.push(arr[index] * arr[index]);
  }
return arrSquare; 
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
