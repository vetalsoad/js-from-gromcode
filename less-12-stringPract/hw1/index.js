const reverseString = text => {
  if (typeof text !== "string") {
    return null;
  }
  return text.split('').reverse().join('');  
}
const txt = 'abcdef';
console.log (txt);
console.log(reverseString(txt));