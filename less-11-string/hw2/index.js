function countOccurrences(text = "", str) {
  if (str === "") {
    return null;
  }
  let howMach = 0;
  let underLine = text;
  while (true) {
    if (text.indexOf(str) === -1) {
      break;
    }

    const index = underLine.indexOf(str);

    underLine = underLine.slice(index + 1);

    howMach += 1;

    if (underLine.indexOf(str) < 0) {
      break;
    }
  }
  return howMach;
}

const text = "fucking fuck fuck the system";
const str = "fuck";
console.log(countOccurrences(text, str));
