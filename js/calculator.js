// TODO add function to update the field and perform calculations

// jQuery Example
// $(function(){
//     $("#screen").click(function(){
//         $(this).hide();
//     });
// });

var screenText = '0.';
var freshScreen = true;

function enterNumber(num) {

    //var test = 'the test worked';
    //receives input based on button clicked
    // either:
    //    -a numeral is pressed updating the number
    //    -a calculation is pressed, arithmetic is performed, update the number
    //    -clear is pressed and makes the number 0

    $(function(){
        var currentText = $("#screen").text();
        if (freshScreen) {
            currentText = ''
            freshScreen = false;
        }
        
        $("#screen").text(currentText + num);
    });
}