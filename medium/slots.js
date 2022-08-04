// write your classes:

class Machine {
    constructor(costToPlay, smallPayout, bigPayout) {
      this.costToPlay = costToPlay;
      this.smallPayout = smallPayout;
      this.bigPayout = bigPayout;
    }
    spin() {
      let slotsString =
        String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
        String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
        String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      console.log(slotsString);
      if (slotsString[0] === slotsString[1] && slotsString[0] === slotsString[2]) return this.bigPayout;
      if (slotsString[0] != slotsString[1] && slotsString[0] != slotsString[2]) return 0;
      return this.smallPayout;
    }
  }
  
  class Player {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
    play(machine) {
      if (machine.costToPlay > this.balance) return console.log('not enough to play');
      this.balance = this.balance + machine.spin() - machine.costToPlay;
      console.log(`Balance: ${this.balance}`);
    }
  }
  
  let newPlayer = new Player('muggins', 30);
  
  const machine = new Machine(2, 10, 100);

// test your classes with console.log
// to show they work as intended:


newPlayer.play(machine);
newPlayer.play(machine);
newPlayer.play(machine);
newPlayer.play(machine);
newPlayer.play(machine);
newPlayer.play(machine);
newPlayer.play(machine);
newPlayer.play(machine);