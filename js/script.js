var numbers = document.getElementsByClassName("btn-numbers")
var sign = document.getElementsByClassName("btn-operators")
var input = document.getElementById("display")
var equal = document.getElementById("equal")
var ac = document.getElementById("ac")

var first_value = 0;
var second_value = 0;
var final_value = 0;


// code for AC button 

ac.onclick = function () {
    input.placeholder = "Enter First Value"
    input.value = ""
    first_value = 0;
    second_value = 0;
    final_value = 0;
}

// code for enter value from button 

for (var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
        var number_input = this.innerHTML;
        input.value += number_input

    }
}

// code for operators 

for (var k = 0; k < sign.length; k++) {
    sign[k].onclick = function () {

        first_value = parseInt(input.value);

        input.value = ""
        var signs = this.innerHTML;
        input.placeholder = "Enter Second Value"

        equal.onclick = function () {
            second_value = parseInt(input.value)



            if (signs == "+") {
                final_value = first_value + second_value
                input.value = final_value;
            }
            else if (signs == "-") {
                final_value = first_value - second_value
                input.value = final_value;
            }
            else if (signs == "/") {
                final_value = first_value / second_value
                input.value = final_value;
            }
            else {
                final_value = first_value * second_value
                input.value = final_value;
            }
        }

    }





}


