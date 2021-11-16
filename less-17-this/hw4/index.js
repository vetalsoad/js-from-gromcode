const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  },
  setFullName(fullName){
    const nameArr = fullName.split(' ');
    this.firstName = nameArr[0];
    this.lastName = nameArr[1];
  },
};

console.log(user.getFullName());
user.setFullName('Johny Depp');
console.log(user.getFullName());