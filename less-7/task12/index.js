 const arrAverage = (arr) => {
   if(!Array.isArray(arr)){
     return null;
   }
   return arr.reduce((acc, index) => acc + index)/ arr.length;
   }
   const arr = [1,2,3,4,5];
   console.log(arrAverage(arr));