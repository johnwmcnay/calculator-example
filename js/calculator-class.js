//TODO: make this class;
// worry about keyboard input later;
// make mobile responsive (i.e. portrait vs landscape) and scalable size;
//const zeroKey = 48, nineKey = 57;
//const plusKey = 187, minusKey = 189, divideKey = 191; timesKey = 88;

//calculator has a screen, keypad, log
class calculator {
    constructor() {
        this.createCalculator();

        //HTML - make body: add screen, keypad and log

    }

    createCalculator() {
        this.screen = new calculatorScreen();
        this.keypad = new calculatorKeypad();
        this.log = new calculatorLog();
        let element = document.createElement("div");
        element.id = "calculator";
        this.HTML = element;
    }

}

//has inputField
class calculatorScreen {
    constructor() {
        this.freshScreen = true;
    }
}

// class inputField {
//     constructor() {
//
//     }
// }

//has key objects: numbers, operators
//has a layout
class calculatorKeypad {
    constructor() {

    }

    createKey(key) {
        let element = document.createElement("button");
        element.id = key;
        return element;
    }

    createKeys() {

    }
}


//is a button, updates the screen when pressed (if a valid input)
class calculatorKey {
    constructor(id) {
        this.createKey(id);
    }

    createKey(key) {
        let element = document.createElement("button");
        element.id = key;

        //onclick function
        element.onclick = function() {

        };

        this.element = element;
    }
}

class calculatorLog {
    constructor() {

    }
}