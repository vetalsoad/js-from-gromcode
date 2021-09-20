//'34' => 34

const getParsedIntegers = (arr) =>{
  return arr.map(el => Number.parseInt(el));
};

const getParsedIntegersV2 = (arr) => {
  return arr.map((el) => parseInt(el));
};

const getParsedFloats = (arr) => {
  return arr.map((el) => Number.parseFloat(el));
};

const getParsedFloatsV2 = (arr) => {
  return arr.map((el) => parseFloat(el));
};



const numbs = [1, 2.13, 3.754, -7.2929];
console.log(getParsedIntegers(numbs));
console.log(getParsedIntegersV2(numbs));
console.log(getParsedFloats(numbs));
console.log(getParsedFloatsV2(numbs));