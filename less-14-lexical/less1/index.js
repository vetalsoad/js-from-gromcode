let message = "Just learn it";
export function sendMessage(name) {
  console.log(`${name}, ${message}! Your Gromcode`);
}

export function setMessage(text) {
 message = text;
}

setMessage('Good job');

const namme = 'Katya';
console.log(sendMessage(namme)); 