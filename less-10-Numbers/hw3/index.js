/* const multiRound = (num) => {
  const massive = [];
  const massive = [];
  massive.push(Math.trunc(num * 100) / 100);
  massive.push(Math.ceil(num * 100) / 100);
  massive.push(Math.round(num * 100) / 100);
  massive.push(+num.toFixed(2));
  return massive;
}; */



const superRound = (num, prec) => {
  const massive = [];
  massive.push(Math.floor(num * 10**prec) / 10**prec);
  massive.push(Math.trunc(num * 10**prec) / 10**prec);
  massive.push(Math.ceil(num * 10**prec) / 10**prec);
  massive.push(Math.round(num * 10**prec) / 10**prec);
  massive.push(+num.toFixed(prec));
  return massive;
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(superRound(11.12556, 2));
console.log(superRound(6.11, 3));
