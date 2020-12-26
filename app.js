function toCelsius (fahrenheit){
    let = value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "C"
} 

function display (elementId, value){
    document.getElementById().innerHTML = "<br>"+value+"</br>"+"<br>"+elementId+"</br>"
}

function toFahrenheit(celsius)
{
    let value = (celsius * 9) / 5 +32
    return value.toFixed(2) + "F";
}

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}

function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}

