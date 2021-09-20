//1.итерировать числа
//2.delete chot nechotn
//3.umnoghit nechotconst

const m = 2;
const n = 34;
let result = 1;
/* for (let index = m; index <= n; index++) {
    if (index % 2 !== 0) {
        result *= index;
    }
}
console.log(result); */
for (let index = m; index <= n; index++) {
    if (index % 2 === 0) continue;
    result *= index;
}
console.log(result);