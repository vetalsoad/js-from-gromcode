let sum = 1;
for (let index = 1; index <= 1000; index++) {
    sum += index;
}
console.log(sum);
console.log(Math.trunc(sum / 1234));
console.log(sum % 1234);
/* Math.trunc(sum / 1234) > (sum % 1234) ? console.log('true') : console.log('false'); */
console.log(Math.trunc(sum / 1234) > (sum % 1234));