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
        if(this.hungry === true) {
            console.log('That was yummy!');
        } else {
            console.log('No thanks! I\'m full')
        }
    }; // sleep()


};