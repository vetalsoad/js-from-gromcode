function swap(numbers) {
  const [start, ...rest] = numbers;
  return[...rest, start];
}


function swapManual(numbers) {
let copyNumbers = numbers.slice();
let elem = copyNumbers.shift();
copyNumbers.push(elem);
return copyNumbers;  
}



// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
