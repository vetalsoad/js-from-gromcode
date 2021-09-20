function getKeys(obj) {
  const keysObj = Object.keys(obj);
  const result = keysObj.forEach(element => console.log(element));
  
}


const obj = {
  "John Doe": 19,
  Tom: 17,
  Bob: 18,
};
 console.log(obj); 
 console.log(getKeys(obj)); 