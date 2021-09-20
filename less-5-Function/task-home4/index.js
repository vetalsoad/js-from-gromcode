
function findDivCount(a, b, n) {
  let howMuch = 0;
  for (let index = a; index <= b; index += 1) {    
    if (index % n === 0) {
      howMuch += 1;      
    }
  }
  return howMuch;
}


