function sum(from, to){
  let numb = 0;
  for(let index = from; index <= to; index +=1){
    numb += index;
  }
  return numb;
}

/* function compareSums(a, b, c, d){
  return(sum(a,b)>sum(c,d));
} */
 const compareSums = (a, b, c, d) => sum(a, b) > sum(c, d);