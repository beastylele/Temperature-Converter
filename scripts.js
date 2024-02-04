
let tempInput = document.getElementById("entered-temp")
// gets the temperature that the user entered

let outputUnit = document.querySelector('input[name="unit_need"]:checked');
// gets the unit wanted for conversion

let button = document.getElementById("button");
// the button we press to convert
let tempOutput = document.getElementById("converted_temp");
// the spot where the converted temperature will be output

let temp_converted = 0;
// the converted temperature

button.addEventListener("click", function() {
    let inputUnit = document.querySelector('input[name="temp"]:checked');
    // gets input unit when button pressed
    let outputUnit = document.querySelector('input[name="unit_need"]:checked');
    // gets the unit wanted for conversion when button pressed
    let temp_converted = 0; // the temp we are looking 

    if (inputUnit && inputUnit.value == "celsius") {

        if (outputUnit && outputUnit.value == "celsius") {
            temp_converted  = tempInput.value; // celsius stays the same
    
        } else if (outputUnit && outputUnit.value == "fahrenheit") {
            temp_converted = (9/5 * tempInput.value) + 32; // converts celsius to fahrenheit
            
        } else if (outputUnit && outputUnit.value == "kelvin") {
            temp_converted = parseFloat(tempInput.value) + 273.15; // convert celsius to kelvin
        } else {
            temp_converted = "0";
        }
    } else if (inputUnit && inputUnit.value == "fahrenheit") {

        if (outputUnit && outputUnit.value == "celsius") {
            temp_converted  = ((tempInput.value) - 32) * 5/9; // fahrenheit to celsius conveersion
    
        } else if (outputUnit && outputUnit.value == "fahrenheit") {
            temp_converted = tempInput.value; // fahrenheit stays the same
            
        } else if (outputUnit && outputUnit.value == "kelvin") {
            temp_converted = (tempInput.value - 32) * 5/9 + 273.15; // convert fahrenheit to kelvin
        } else {
            temp_converted = "0";
        }
    } else if (inputUnit && inputUnit.value == "kelvin") {

        if (outputUnit && outputUnit.value == "celsius") {
            temp_converted  = parseFloat(tempInput.value) - 273.15; // kelvin to celsius
    
        } else if (outputUnit && outputUnit.value == "fahrenheit") {
            temp_converted = (tempInput.value - 273.15) * 9/5 + 32 // kelvin to fahrenheit
            
        } else if (outputUnit && outputUnit.value == "kelvin") {
            temp_converted = tempInput.value; // stays same
        } else {
            temp_converted = "0";
        }

    }
    if (Number.isFinite(temp_converted) && temp_converted % 1 != 0) {
        tempOutput.textContent = temp_converted.toFixed(2); // changes the temperature output

    } else {
        tempOutput.textContent = temp_converted; // changes the temperature output
    }

    
});



