"use strict";

/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = (num) => {
  const massive =[];
  massive.push(Math.floor(num * 100) / 100);  
  massive.push(Math.trunc(num*100) / 100);  
  massive.push(Math.ceil(num * 100) / 100);  
  massive.push(Math.round(num * 100) / 100);  
  massive.push(+num.toFixed(2));  
  return massive;
};

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
console.log(multiRound(11.12556));
console.log(multiRound(6.112));