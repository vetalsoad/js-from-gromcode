export function defer (func, ms) {
  return function() {
    setTimeout(() => func.call(this, ...arguments), ms);
  }
}


const user = {
  name: 'Tom',
  sayHi(){
    console.log(`Hi, I am ${this.name}!`)
  }
}

const deferredSayHi = defer(user.sayHi, 2000);

deferredSayHi.call({ name: 'Bob' });
