/* export */ const calc = initValue => {
  let result = initValue;


   const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    result() {
      return result;
    }
  };

  return calculator;
}


const result = calc(7).add(9).mult(4).div(10).substract(5).result();

console.log(result);

const ten = calc(10).substract(3).result();
console.log(ten);