function multiplyNumber(){
    var number1 = document.getElementById("firstNumber").value;
    var number2 = document.getElementById("secondNumber").value;
    var result = number1 * number2;
    document.getElementById("result").innerHTML = "The Result is:"+ result;
}

function divideNumber(){
    var number1 = document.getElementById("firstNumber").value;
    var number2 = document.getElementById("secondNumber").value;
    if(number2==0){
        document.getElementById.innerHTML = "Division by zero is not allowed";
    }
    var result = number1 / number2;
    document.getElementById("result").innerHTML = "The Result is:"+ result;
}
