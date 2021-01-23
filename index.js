const { Z_FULL_FLUSH } = require("zlib");

function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
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


}; // DigitalPal()