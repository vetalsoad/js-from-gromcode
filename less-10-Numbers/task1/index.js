 const getFiniteNumbers = (arr) => {
return arr.filter(elem => Number.isFinite(elem));
 };

  const getFiniteNumbersV2 = (arr) => {
    return arr.filter((elem) => isFinite(elem));
  };

  const getNaN = (arr) => {
    return arr.filter((elem) => Number.isNaN(elem));
  };

  const getNaNV2 = (arr) => {
    return arr.filter((elem) => isNaN(elem));
  };

  const getIntegers = (arr) => {
    return arr.filter((elem) => Number.isInteger(elem));
  };


 const numbers = [1, 2, 3, 4, 5, Infinity, NaN];
console.log(getFiniteNumbers(numbers));
console.log(getFiniteNumbersV2(numbers));
console.log(getNaN(numbers));
console.log(getNaNV2(numbers));
console.log(getIntegers(numbers));