// TODO add function to update the field and perform calculations

// jQuery Example
// $(function(){
//     $("#screen").click(function(){
//         $(this).hide();
//     });
// });

// var screenText = '0';
var freshScreen = true;
const zeroKey = 48, nineKey = 57;
const plusKey = 187, minusKey = 189, divideKey = 191; timesKey = 88;
const operatorKeys = [187, 189, 191, 88];

const decimalPressed = key => {
    return (key === 190);
};

const operatorStr = operator => {
    const ops = ["+", "-", "/", "x"];

    return ops[operatorKeys.indexOf(operator)];
}

//returns whether or not the key code is for the + - x / operators
const isAnOperator = key => {
    return (operatorKeys.indexOf(key) !== -1);
};

//returns true or false if the argument is a keyCode between 0 and 9
const pressedANumber = key => {
    return (key >= zeroKey && key <= nineKey);
};

const enterPressed = key => {
    return (key === 13);
};

//keydown event to handle keyboard inputs as well
$(document).keydown(function(keyPressed) {
    const key = keyPressed.keyCode;

    console.log(key);

    if (pressedANumber(key)) {
        handleNumber(key - zeroKey);
    } else if (isAnOperator(key)) {
        handleOperator(key);
    } else if (decimalPressed(key)) {
        handleDecimal();
    } else if (enterPressed(key)) {
        handleEquals();
    }
});

const handleEquals = () => {
    console.log("enter/equal pressed");
}

//updates the screen based on which number is pressed
function handleNumber(num) {

    //var test = 'the test worked';
    //receives input based on button clicked
    // either:
    //    -a numeral is pressed updating the number
    //    -a calculation is pressed, arithmetic is performed, update the number
    //    -clear is pressed and makes the number 0
    var screen = $("#screen");
    var screenText = screen.text();

    if (freshScreen && num !== 0) {
        freshScreen = false;
        screen.text(num);
    } else {

        if (screenText !== "0") {
            if (screenText[screenText.length - 1] !== " " || num > 0) {
                screen.text(screenText + num);
            }
        }
    }
}

//clears the screen wiping out any progress
const clearScreen = () => {
    freshScreen = true;
    $("#screen").text('0')
};

//+ - / x is passed in and handled to update the screen and calculations
const handleOperator = op => {
    var screen = $("#screen");
    var screenText = screen.text();

    if (!freshScreen && (screenText[screenText.length - 1] !== " ") )
        screen.text(screenText + " " + operatorStr(op) + " ");

};

const handleDecimal = () => {
    var screen = $("#screen");
    var screenText = screen.text();

    if (freshScreen) {
        freshScreen = false;
        screen.text("0.");
    } else if (screenText.indexOf(".") === -1) {
        if (screenText[screenText.length - 1] === " ") {
            screen.text(screenText + "0.");
        } else {
            screen.text(screenText + ".");
        }
    }

};