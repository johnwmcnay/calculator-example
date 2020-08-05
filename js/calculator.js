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

//returns whether or not the key code is for the + - x / operators
const isAnOperator = key => {
    return (operatorKeys.indexOf(key) !== -1);
};

//returns true or false if the argument is a keyCode between 0 and 9
const pressedANumber = key => {
    return (key >= zeroKey && key <= nineKey);
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
        handleDecimal()
    }
});

//updates the screen based on which number is pressed
function handleNumber(num) {

    //var test = 'the test worked';
    //receives input based on button clicked
    // either:
    //    -a numeral is pressed updating the number
    //    -a calculation is pressed, arithmetic is performed, update the number
    //    -clear is pressed and makes the number 0
    var currentText = $("#screen").text();
    if (freshScreen) {
        freshScreen = false;
        currentText = '';
    }

    if (num === 0) {
        console.log("zero pressed");
        //handleZero()
    } else {
        $("#screen").text(currentText + num);
    }

}

//clears the screen wiping out any progress
const clearScreen = () => {
    freshScreen = true;
    $("#screen").text('0')
};

//+ - / x is passed in and handled to update the screen and calculations
const handleOperator = op => {
    console.log("handleOperator ran");
};

const handleDecimal = () => {
    console.log("decimal pressed");
};