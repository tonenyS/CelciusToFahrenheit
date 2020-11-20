function toCelsius (){
    var x = document.getElementById("myText").value;
    let clValue = (x - 32) * 5 /9
    var x2 = document.getElementById("myText2").value;
    let clValue2 = x2 * 9/5 +32
    // value = parseInt(value)
    document.getElementById("sum").innerHTML = clValue.toFixed(2)
    document.getElementById("sum2").innerHTML = clValue2
} 


