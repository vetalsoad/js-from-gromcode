const user {
  firstName: 'John',
  lastName: 'Doe',
  get fullName(){
    return `${firstName} ${lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

