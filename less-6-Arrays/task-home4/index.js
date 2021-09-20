const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = arr.slice();
  for (let index = 0; index < copyArr.length; index += 1) {
    if (copyArr[index] % 2 === 0) {
      copyArr[index] += delta;
    }
  }
  return copyArr;
};
/* increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> [] */

