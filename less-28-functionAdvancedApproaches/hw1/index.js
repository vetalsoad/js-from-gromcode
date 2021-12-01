
// algo
// 1. пишу функцию с методами (+, -)
// 2. создам массив со строками (год...)
// 3. по индексу найду значение, которое нужно поменять


const calc = (initValue) => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

const shmoment = (date) => {
  let resultDate = new Date(date);
  /* console.log(resultDate); */
  const timeValue = ['years', 'months', 'days', 
  'hours', 'minutes', 'seconds', 'milliseconds'];
  resultDate.map....

  return resultDate;
}

shmoment(new Date(2020, 0, 7, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1). result();