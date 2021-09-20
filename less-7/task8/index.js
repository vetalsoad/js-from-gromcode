const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
    let cloneArr = arr.slice();
    return cloneArr;
}