// write your classes:

class Card {
    constructor (suit,val){
        this.suit = suit
        this.val = val
        this.faceUp = false
    }
    flip(){this.faceUp = !this.faceUp}
    show(){this.faceUp = true}
    hide(){this.faceUp = false}
    abbreviation(){
        return this.val[0]+this.suit[0]
    }
    title(){
        return this.value + ' of ' + this.suit
    }
    colour(){
        if (this.suit === 'Hearts' || 'Diamonds'){
            return 'red'
        }else {return 'black'}
    }
    rank(){
        switch(this.val){
            case 'Jack':
                return 11
            case 'Queen': 
                return 12
            case 'King': 
                return 13
            case 'Ace': 
                return 1
            default: 
            return this.val
        }
    }
}


class Deck{
    constructor(){

    }
}

const testcard = new Card('Hearts', 'King');
console.log(testcard.faceUp)
testcard.flip()
console.log(testcard.faceUp)
testcard.hide()
console.log(testcard.faceUp)
testcard.show()
console.log(testcard.faceUp)
// test your classes with console.log
// to show they work as intended:


