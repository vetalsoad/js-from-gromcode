const splitText = (text, numb) =>{
  if(typeof text !== "string"){
    return null;
  }
  if (numb === undefined) {
    numb = 10;
  }
  const strArr = [];
  let startPosition = 0;
  while(true) {
    let chunk = text.substr(startPosition, numb);
     if (chunk.length === 0){
      break;
    }
    strArr.push(chunk[0].toUpperCase()+chunk.slice(1));
    startPosition +=numb;
   
  }
  return strArr.join('\n');
}



const text = 'i become so fly, i can feel you mind';
const numb = 3;
console.log(splitText(text, numb));