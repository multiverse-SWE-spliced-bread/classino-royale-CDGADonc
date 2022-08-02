// write your classes:
class Die {
    constructor(sides){
        if(sides < 4 || sides > 20) {
            throw new Error('sides must be between 4 and 20')
        }
        this.sides = sides;
    }
    roll(){
  return Math.ceil(Math.random() * this.sides);
    }
}


class Cup {
    constructor(dice){
        let arrayBuilder = [];
        for (let i = 0; i< dice.length; i++){
            arrayBuilder.push(new Die(dice[i]));
        }
        this.dice = arrayBuilder;
    }
    spill(){
        let arrayBuilder = [];
        for (let i = 0; i < this.dice.length; i++){
            // console.log(this.dice[i].roll())
            arrayBuilder.push(this.dice[i].roll())
        }
        return arrayBuilder;
    }
}



const testCup = new Cup([4,6,10]);
console.log(testCup.spill());
// console.log(testCup.spill());
// console.log(testDie.roll())
// test your classes with console.log
// to show they work as intended:


