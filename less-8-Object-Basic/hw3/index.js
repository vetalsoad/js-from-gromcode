function getKeys(obj) {

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(key);
    }
  }
}

const xxx = {
  name: "kon",
  age: 2,
  "what eat": "birds",
};

console.log(xxx);
console.log(getKeys(xxx)); 
