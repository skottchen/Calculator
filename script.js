const zeroBtn = document.getElementById("0");
const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const calculatorDisplay = document.querySelector(".user-input");

const userInputArray = new Array(2);
userInputArray[0] = 0;
userInputArray[1] = 0;

let leftSide;
let rightSide;
let operator;
let count = 0;
let operatorClickCount = 0;
let total;

function operate(leftSide, rightSide, operator) {
    if (operator == "+") {
        total = leftSide + rightSide;
    } else if (operator == "-") {
        total = leftSide - rightSide;
    }
    userInputArray[0] = total;
    userInputArray[1] = 0;
    calculatorDisplay.textContent = total;
}

function updateCalculatorDisplay(str) {
    if (str != "perform operation") {
        if (count == 0) {
            calculatorDisplay.textContent = str
        } else {
            calculatorDisplay.textContent += str;
        }

        if (operatorClickCount == 0) {
            userInputArray[0] = parseInt(calculatorDisplay.textContent);
        } else if (operatorClickCount >= 1) {
            userInputArray[1] = parseInt(calculatorDisplay.textContent);
        }

        //don't increment count if the user keeps pressing 0
        if (!(calculatorDisplay.textContent.length == 1 && calculatorDisplay.textContent == 0)) {
            count++;
        }
    }


    if (str == "perform operation") {
        operatorClickCount++;
        count = 0;
        operate(userInputArray[0], userInputArray[1], operator);
    }

    // console.log("Count " + count);
    // console.log(str);
    // console.log("Click count :" + operatorClickCount);
    // console.log("First Index " + userInputArray[0]);
    // console.log("Second Index " + userInputArray[1]);
    // console.log(userInputArray)
}

zeroBtn.addEventListener("click", () => {
    updateCalculatorDisplay(zeroBtn.textContent);
})

oneBtn.addEventListener("click", () => {
    updateCalculatorDisplay(oneBtn.textContent);
})

twoBtn.addEventListener("click", () => {
    updateCalculatorDisplay(twoBtn.textContent);
})

threeBtn.addEventListener("click", () => {
    updateCalculatorDisplay(threeBtn.textContent);
})

fourBtn.addEventListener("click", () => {
    updateCalculatorDisplay(fourBtn.textContent);
})

addBtn.addEventListener("click", () => {
    operator = "+"
    updateCalculatorDisplay("perform operation");
})

subtractBtn.addEventListener("click", () => {
    operator = "-"
    updateCalculatorDisplay("perform operation");
})