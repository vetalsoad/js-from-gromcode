const numb = 1000;
let sum = 0;
for (let index = 1; index <= numb; index++) {
    if (index % 2 !== 0) {
        console.log('Found');
        sum += index;
    }
}
if (sum * 5 > 5000) {
    console.log('Bigger');
} else {
    console.log('Smaller or equal');
}