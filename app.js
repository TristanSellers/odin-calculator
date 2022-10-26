let operator = '';
let pastValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let pastScreen = document.querySelector(".past");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        pastScreen.textContent = pastValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        pastValue = '';
        currentValue = '';
        operator = '';
        pastScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        calculate()
        pastScreen.textContent = '';
        currentScreen.textContent = pastValue;
    })

    decimal.addEventListener("click", function(){
        addDecimal();
})
})

function handleNumber(num){
    if(currentValue.length <= 10){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    pastValue = currentValue;
    currentValue = '';
}

function calculate(){
    pastValue = Number(pastValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        pastValue += currentValue;
    } else if(operator === "-"){
        pastValue -= currentValue;
    } else if(operator === "X"){
        pastValue *= currentValue;
    } else{
        pastValue /= currentValue;
    }
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}