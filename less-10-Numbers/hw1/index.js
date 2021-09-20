const getTotalPrice = (arr) => {
const summ = arr.reduce((acc, el) => acc + el); 
const result = (Math.floor(summ*100)/100);
return ('$' + result);
}


const numbers = [1, 2.43, 3.001, 4, 5.43,];
console.log(getTotalPrice(numbers));