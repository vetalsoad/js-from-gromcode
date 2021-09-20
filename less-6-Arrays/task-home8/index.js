const sortAsc = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let j = 0; j < array.length; j += 1) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
};

let a = [5, 4, 7, 2, 1, 0];
console.log(sortAsc(a));

const sortDesk = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let j = 0; j < array.length; j += 1) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
};
console.log(sortDesk(a));
