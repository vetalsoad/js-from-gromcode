function getSum(firstNum, secondNum){
  let summ = 0;
  for (let index = firstNum; index <= secondNum; index += 1){
    if(index % 2 === 0){
    summ +=index;
    }
  }
  return(summ);
}
