/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export default class Calculator {
    constructor(firstname, secondName, operator, result) {
        this.firstNumber = firstname
        this.secondNumber = secondName
        this.operator = operator
        this.result = result
    }

    doSum() {
        // can't press equals unless we have have two numbers and an operator
        if (!this.firstNumber || !this.secondNumber || !this.operator) {
            return
        }
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
        if (this.result) {
            return
        }
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
        if (this.result) {
            return
        }
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
        //if no result return
        if (!this.result) {
            return
        }

        // check which browser we are using

        const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

        // Firefox 1.0+
        const isFirefox = typeof InstallTrigger !== 'undefined';

        // Safari 3.0+ "[object HTMLElementConstructor]" 
        const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

        // Internet Explorer 6-11
        const isIE = /*@cc_on!@*/ false || !!document.documentMode;

        // Edge 20+
        const isEdge = !isIE && !!window.StyleMedia;

        // Chrome 1 - 79
        const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime) && !isOpera;

        // Edge (based on chromium) detection
        const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);


        let browser = ""

        if (isFirefox) {
            browser = browser.concat("firefox")
        }
        if (isOpera) {
            browser = browser.concat("Opera")
        }
        if (isSafari) {
            browser = browser.concat("Safari")
        }
        if (isIE) {
            browser = browser.concat("Internet Explorer")
        }
        if (isEdge) {
            browser = browser.concat("Edge")
        }
        if (isChrome) {
            browser = browser.concat("Chrome")
        }
        if (isEdgeChromium) {
            browser = browser.concat("Edge Chromium")
        }

        let todaysDate = new Date()
        let InfoArray = [browser, todaysDate, this.result]

        let csvContent = InfoArray.toString()
        localStorage.setItem("sum", csvContent)

    }
    //reset calculator
    clearCalc() {
        this.firstNumber = null
        this.secondNumber = null
        this.operator = null
        this.result = 0
    }
}