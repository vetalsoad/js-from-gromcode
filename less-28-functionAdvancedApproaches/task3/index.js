/* // const sum = (a,b) => a + b;

const sum = a => b => a + b;

const add3 = sum(3);

const result = add3(5);

console.log(result); */

const mult = a => b => a * b;

const twice = c => mult(c)(2);

const triple = d => mult(d)(3);