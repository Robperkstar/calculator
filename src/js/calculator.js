export default class Calculator {
    constructor() {
        this.firstNumber = null
        this.secondNumber = null
        this.operator = null
        this.result = 0
    }

    doSum() {
        this.result = eval(this.firstNumber + this.operator + this.secondNumber)
        this.firstNumber = null
        this.secondNumber = null
        this.operator = null
    }


    get equals() {
        return this.result
    }
    //  display the calculation- but only if the value is there, otherwiase display an empty string
    get displayedCalculation() {
        return (this.firstNumber ? this.firstNumber : "") +
            (this.operator ? this.operator : "") +
            (this.secondNumber ? this.secondNumber : "")
    }

    //add operator if the first number has been added already
    addOperation(operator) {
        if (operator === "=") {
            return;
        } else if (this.firstNumber === null) {
            return
        } else if (this.secondNumber !== null) {
            return
        } else this.operator = operator
    }

    // add first or second number dependng on what has been added already.
    addNumber(number) {
        if (this.operator === null) {
            if (this.firstNumber === null) {
                this.firstNumber = number
            } else {
                this.firstNumber = this.firstNumber + number

            }
        } else {
            if (this.result) {
                return
            } else if (this.secondNumber === null) {
                this.secondNumber = number
            } else {
                this.secondNumber = this.secondNumber + number
            }
        }

    }

    saveSum() {
        console.log('saveSum')
    }
    //reset calculator
    clearCalc() {
        this.firstNumber = null
        this.secondNumber = null
        this.operator = null
        this.result = 0
    }
}