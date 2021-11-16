class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }

  requestNewPhoto() {
  console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(numb) {
    if (numb < 0) {
      return false;
    }
    this.age = numb;
    if (numb >= 25){
      this.requestNewPhoto();
    }
  return numb;
  }

  static createEmpty(){
    return new User ("", null);
  }
};

const user1 = new User('John', 17);
user1.setAge(25);

