const getRandomNumbers = (length, from, to) => {
  // put your code here
  if (to - from < 1){
    return null;
  }
  const arr = [];
  for (let i = 0; i<length; i+=1){
    arr.push(Math.round(Math.random() * (to - from) + from));
  }
  console.log(arr);
  return arr;
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
/* Math.random() * (to - from) + from; */