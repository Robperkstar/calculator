/* eslint-disable no-unused-vars */

const numbers = Array.from(document.querySelectorAll(".calc-btn--number"));
const operationButtons = Array.from(
    document.querySelectorAll(".calc-btn--operator")
);
const calculationDisplay = document.querySelector(".calc-calculation");
const sumDisplay = document.querySelector(".calc-sum");
const equalsButton = document.getElementById("equals-btn");
const allClear = document.getElementById('calc-ac')
const save = document.getElementById('calc-save')

save.addEventListener('click', e => saveSum())
allClear.addEventListener('click', e => clearCalc())

numbers.forEach((number) =>
    number.addEventListener("click", e => addNumber(e.target.value))
);
operationButtons.forEach((operator) =>
    operator.addEventListener("click", e => addOperation(e.target.value))
);
equalsButton.addEventListener("click", () => doSum());


window.addEventListener("keydown",
    e => {
        e.preventDefault()
        keyChecker(e.key)
    })

function keyChecker(key) {
    if (key === "Enter") {
        return doSum()
    } else if (key == " ") {
        console.log("hi")
        return
    } else if (!isNaN(key) || key === ".") {
        return addNumber(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        return addOperation(key)

    } else return;
}


function addOperation(operator) {
    if (operator === "=") {
        return;
    }
    console.log("operator", operator)
}

function addNumber(number) {
    console.log("number", number);
}

function doSum() {
    console.log("Im a sum")
}

function saveSum() {
    console.log("save")
}

function clearCalc() {
    console.log('clear calc')
}