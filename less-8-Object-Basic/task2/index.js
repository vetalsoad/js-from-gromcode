/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const concatProps = (obj) => {
  let arr = [];

  for (let key in obj){
    arr.push(obj[key]);
  };

  return arr;
};

// examples

let xxx = { name: "John Doe", age: 17, interest: "football" }; // ==> ['John Doe', 17, 'football']
console.log(concatProps(xxx));