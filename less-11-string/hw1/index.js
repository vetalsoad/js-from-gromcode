const splitString = (text, numb = 10) => {
  if (typeof text !== "string") {
    return null;
  }
  
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, numb);
    if (chunk.length === 0) {
      break;
    }
    
    strArr.push(chunk[0]/* .toUpperCase() */ + chunk.slice(1));
    startPosition += numb;
  }
  let lastElem = strArr[strArr.length - 1];
  if (lastElem.length < numb){
    while (lastElem.length < numb) {
      lastElem += ".";
    }
  }
  strArr[strArr.length - 1] = lastElem;
  return strArr/* .join("\n")  */;
};

const text = "i become so fly, i can feel you mindс";
const numb = 5;
console.log(splitString(text, numb));
