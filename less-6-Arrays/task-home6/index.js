const cloneArr = (arr) => {
  if(!Array.isArray(arr)){
    return null;
  }
  let copyArr = [];
  copyArr = arr.slice();
  return copyArr;
}