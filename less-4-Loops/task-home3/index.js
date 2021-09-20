const start = 2;
const end = 7;
let result = 0;
repeat: for (let index = start; index <= end; index++) {
    if (index % 5 === 0) {
        console.log(index);
        continue repeat;
    }
    if (index % 2 === 0 && index % 4 !== 0) {
        result += index;
        continue repeat;;
    }
    if (index % 3 === 0) {
        result -= index;
        continue repeat;
    }
    if (index % 4 === 0) {
        result *= index;
        continue;
    }
}

function run() {
    var a = 0,
        b = 1;

    if (a == b) {
        return c;
    }
}