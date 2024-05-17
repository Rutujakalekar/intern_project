function convertTemperature() {
    let inputValue = document.getElementById('inputValue').value;
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let outputValue = document.getElementById('outputValue');

    if (inputValue === '' || fromUnit === '--' || toUnit === '--') {
        outputValue.innerHTML = 'Please enter a temperature value and select both units.';
        return;
    }

    inputValue = parseFloat(inputValue);
    let result;

    if (fromUnit === toUnit) {
        result = inputValue;
    } else {
        if (fromUnit === 'Fahrenheit') {
            if (toUnit === 'Celsius') {
                result = (inputValue - 32) * 5/9;
            } else if (toUnit === 'Kelvin') {
                result = (inputValue - 32) * 5/9 + 273.15;
            } else if (toUnit === 'Rankine') {
                result = inputValue + 459.67;
            }
        } else if (fromUnit === 'Celsius') {
            if (toUnit === 'Fahrenheit') {
                result = (inputValue * 9/5) + 32;
            } else if (toUnit === 'Kelvin') {
                result = inputValue + 273.15;
            } else if (toUnit === 'Rankine') {
                result = (inputValue + 273.15) * 9/5;
            }
        } else if (fromUnit === 'Kelvin') {
            if (toUnit === 'Fahrenheit') {
                result = (inputValue - 273.15) * 9/5 + 32;
            } else if (toUnit === 'Celsius') {
                result = inputValue - 273.15;
            } else if (toUnit === 'Rankine') {
                result = inputValue * 9/5;
            }
        } else if (fromUnit === 'Rankine') {
            if (toUnit === 'Fahrenheit') {
                result = inputValue - 459.67;
            } else if (toUnit === 'Celsius') {
                result = (inputValue - 491.67) * 5/9;
            } else if (toUnit === 'Kelvin') {
                result = inputValue * 5/9;
            }
        }
    }

    outputValue.innerHTML = `${inputValue} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}
