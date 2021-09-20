"use strict";

const withdraw = (clients, balances, client, amount) => {
  let indexClient = clients.indexOf(client);

  if (balances[indexClient] >= amount) {
    balances[indexClient] -= amount;
    return balances[indexClient];
  } else {
    return -1;
  }
}


//example 1:

//input
/* withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50)); */

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));

//output
//-1
//и массив balances должен быть [1400, 87, -6]
