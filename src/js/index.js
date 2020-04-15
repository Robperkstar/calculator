import Calculator from './calculator.js'

//call new calculator class
let calculator = new Calculator()

//get buttons
const numbers = Array.from(document.querySelectorAll(".calc-btn--number"));
const operationButtons = Array.from(
    document.querySelectorAll(".calc-btn--operator")
);
const calculationDisplay = document.querySelector(".calc-calculation");
const sumDisplay = document.querySelector(".calc-sum");
const equalsButton = document.getElementById("equals-btn");
const allClear = document.getElementById('calc-ac')
const save = document.getElementById('calc-save')


//add event listeners to buttons and call functions
save.addEventListener('click', () => saveSum())
allClear.addEventListener('click', () => clearCalc())

numbers.forEach((number) =>
    number.addEventListener("click", e => addNumber(e.target.value))
);
operationButtons.forEach((operator) =>
    operator.addEventListener("click", e => addOperation(e.target.value))
);
equalsButton.addEventListener("click", () => doSum());

//add event listener for keydown and stop default behaviour
window.addEventListener("keydown",
    e => {
        e.preventDefault()
        keyChecker(e.key)
    })


//check keydown and run functions depending on what is pressed.
function keyChecker(key) {
    if (key === "Escape") {
        return clearCalc()
    }
    if (key == " ") {
        return
    } else if (!isNaN(key) || key === ".") {
        return addNumber(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        return addOperation(key)
    } else if (key === "Enter") {
        return doSum()
    } else return;
}

//functions that call the calculator class and change the innerHTML of the display
function addOperation(operator) {
    calculator.addOperation(operator)
    calculationDisplay.innerHTML = calculator.displayedCalculation
}

function addNumber(number) {
    calculator.addNumber(number)
    calculationDisplay.innerHTML = calculator.displayedCalculation
}

function doSum() {
    calculationDisplay.innerHTML = '&nbsp'
    calculator.doSum()
    sumDisplay.innerHTML = calculator.equals

}

function saveSum() {
    calculator.saveSum()

}

function clearCalc() {
    calculator.clearCalc()
    calculationDisplay.innerHTML = '&nbsp'
    sumDisplay.innerHTML = calculator.equals
}