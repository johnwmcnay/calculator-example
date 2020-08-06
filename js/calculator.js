// TODO add function to update the field and perform calculations

// jQuery Example
// $(function(){
//     $("#screen").click(function(){
//         $(this).hide();
//     });
// });

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

const calculate = (num1, op, num2) => {
    var x = parseFloat(num1);
    var y = parseFloat(num2);

    switch (op) {
        case "x":
            return x * y;
        case "/":
            return x / y;
        case "+":
            return x + y;
        case "-":
            return x - y;
        default:
            console.log("Invalid Operator");

    }

};

const handleEquals = () => {
    var screenText = $("#screen").text();
    var calculationArray = screenText.split(" ");

    ["x", "/", "+", "-"].forEach(function(operator) {
        while (calculationArray.indexOf(operator) !== -1) {
            var operatorIndex = calculationArray.indexOf(operator);
            var leftNum = calculationArray[operatorIndex - 1]
            var rightNum = calculationArray[operatorIndex + 1];
            var calculation = calculate(leftNum, operator, rightNum);
            var newArray = calculationArray.slice(0, operatorIndex - 1); //6 x 3 x 5
            newArray.push(calculation.toString());
            calculationArray = newArray.concat(calculationArray.slice(operatorIndex + 2));
            console.log(calculationArray);
        }
    });

    // while (calculationArray.indexOf("x") !== -1) {
    //     var operatorIndex = calculationArray.indexOf("x");
    //     var leftNum = calculationArray[operatorIndex - 1]
    //     var rightNum = calculationArray[operatorIndex + 1];
    //     var calculation = parseFloat(leftNum) * parseFloat(rightNum);
    //     var newArray = calculationArray.slice(0, operatorIndex - 1); //6 x 3 x 5
    //     console.log(newArray);
    //     newArray.push(calculation.toString());
    //     console.log(newArray);
    //     calculationArray = newArray.concat(calculationArray.slice(operatorIndex + 2));
    //     console.log(calculationArray);

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