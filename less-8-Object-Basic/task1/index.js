const transformToObject = (arr) => {
  let obj = {};
  
  arr.forEach(el => {
    obj[el] = el;
  });
  return obj;
};

// examples
const array = ["a", 17.1, "John Doe"];
console.log(array);
console.log(transformToObject(array));/* (["a", 17.1, "John Doe"]); */ // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
