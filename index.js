const { PassThrough } = require("stream");
const { Z_FULL_FLUSH } = require("zlib");

function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
    this.feed = () => {
        if(this.hungry === true) {
            console.log('That was yummy!');
        } else {
            console.log('No thanks! I\'m full')
        }
    }; // feed()

    this.sleep = () => {
        if(this.sleepy === true) {
            console.log('Zzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else {
            console.log('No way! I\'m not tired.');
        }
    }; // sleep()

    this.play = () => {
        if(bored === true) {
            console.log('yay! Let\'s play!');
            this.bored = false;
            this.hungry = true;
        } else {
            console.log('Not right now. Later?');
        }
    }; // play()

    this.increaseAge = () => {
        this.age++;
        console.log(`Happy birthday to me! I'm ${this.age} years old!`);
    }; // increaseAge()

    this.bark = () => {
        console.log('Woof! Woof!');
    }; // bark()

    this.goOutside = () => {
        if(this.outside === false) {
            console.log('Yay! I love the outdoors!');
            this.outside = true;
        } else {
            console.log('But we\'re already outside though');
        }
    }; // goOUtside()

    this.goInside = () => {
        if(this.outside === true) {
            console.log('Do we have to? Fine...');
            this.outside = false;
        } else {
            console.log('I\'m already inside...');
        }
    }; // goInside()

    this.meow = () => {
        console.log('Meow! Meow!')
    }; // meow()

    this.destroyFurniture = () => {
        if(this.houseCondition > 0) {
            this.houseCondition - 10;
        this.bored = false;
        this.sleepy = true;
        console.log('MUAHAHAHAHA! TAKE THAT FURNITURE!');
        }

        return
    }; // destroyFurniture()

    this.buyNewFurniture = () => {
        this.houseCondition + 50;
        console.log('Are you sure about that?')
    }; // buyNewFurniture()

}; // DigitalPal()

const dog = new DigitalPal();
const cat = new DigitalPal();

module.exports = DigitalPal