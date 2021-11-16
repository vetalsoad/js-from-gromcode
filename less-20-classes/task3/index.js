class Wallet {
  
    ballance = 0;
  
    getBallance(){
      return this.ballance;
    }

    deposit(amount){
      return this.ballance += amount;
    }

    withdraw(amount){
    if (amount > this.ballance){
      console.log(`No enough funds`);
      return;
    }

      return this.ballance -= amount;
    }
}


const wallet1 = new Wallet;
console.log(wallet1.getBallance());
console.log(wallet1.deposit(11));
console.log(wallet1.getBallance());
console.log(wallet1.withdraw(10));
console.log(wallet1.getBallance());
console.log(wallet1.withdraw(2));

