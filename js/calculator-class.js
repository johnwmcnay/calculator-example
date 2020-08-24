//TODO: make this class;
// worry about keyboard input later;
// make mobile responsive (i.e. portrait vs landscape) and scalable size;
//const zeroKey = 48, nineKey = 57;
//const plusKey = 187, minusKey = 189, divideKey = 191; timesKey = 88;

//TODO: build calculator from a layout
// calculator has a screen, keypad, log
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
        //add screen
        //add keypad
        //add log
        //this.HTML = all of that;
    }

}

//has inputField
//TODO: adjusts font size based how much data is in the field, using a monospace font
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

//TODO: build from a layout
// has key objects: numbers, operators
class calculatorKeypad {
    constructor() {
        this.createKeypad();
    }

    //layout example
    //789CC
    //456+-
    //123x/
    //00.==

    createKeypad() {
        //create all the keys and place organize them accordingly to the layout
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

//TODO: solve how to create the keypad from a keymap layout
//keymap layout
let keymap = [
    "789CC",
    "456+-",
    "123x/",
    "00.=="
    ]



let keypad = document.createElement("div");
keypad.classList.add("keypad");

//TODO: get pencil and paper to figure out algorithm;
// left to right, find all columns greater than one row tall;
// design a creation tool instead??? keymap has a hard algorithm and is less intuitive to use
// for (let rowIndex in keymap) {
//     let row = document.createElement("div")
//     row.classList.add("row");
//
//     for (let columnIndex in keymap[rowIndex]) {
//
//     }
// }


//TODO: work on creating an editor to design a calculator
let createField = document.createElement("div");
createField.style.display = "flex";
createField.style.flexDirection = "column";

for (let row = 1; row <= 8; row++) {
    let element = document.createElement("div");

    for (let col = 1; col <= 16; col++) {
        let btn = document.createElement("button");
        element.appendChild(btn);
    }
    createField.appendChild(element);
}
// document.body.appendChild(createField);