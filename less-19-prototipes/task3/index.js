function User (name, age) {
  this.name = name;
  this.age = age;  
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`)
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (numb) {
  if (numb < 0){
    return false;
  }
  this.age = numb;
  if (numb >= 25){
   this.requestNewPhoto();
  }
  return numb;
};

const user1 = new User ('Johny', 18);
const user2 = new User ('Vasya', 26);

user1.sayHi();
user1.requestNewPhoto();
user1.setAge();
user2.setAge();