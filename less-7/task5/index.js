const squareArray = arr => {
   if(!Array.isArray(arr)){
    return null;
  } 
  return arr.map((numb) => numb * numb);
}
 const numbs = [1, 2, 3, 4, 5];
 console.log(squareArray(numbs));