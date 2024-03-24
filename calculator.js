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
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
const changeSignBtn = document.getElementById("posneg");

const delBtn = document.getElementById("del");
const decimal = document.getElementById("decimal");

let userInputArray = [0, 0, 0];

let leftSide;
let rightSide;
let operator;
let initialInput = true;
let operatorClickCount = 0;
let total;
let equalsBtnClicked = false;
let decimalCount = 0;
const regexDecimalAllZeros = /^[0.]*0$/; //check that input (integer or decimal) contains all 0s
const regexIntegerAllZeros = /^0+$/;

function operate(left, right) {
    if (calculatorDisplay.textContent != "lmao") {
        operatorClickCount++;
        initialInput = true;
        leftSide = parseFloat(left);
        rightSide = parseFloat(right);
        decimalCount = 0;
        if (typeof right === "string") {
            if (userInputArray.indexOf("+") != -1) {
                total = leftSide + rightSide;
            } else if (userInputArray.indexOf("-") != -1) {
                total = leftSide - rightSide;
            } else if (userInputArray.indexOf("*") != -1) {
                total = rightSide * leftSide;
            } else if (userInputArray.indexOf("/") != -1) {
                if (regexDecimalAllZeros.test(rightSide) == true || regexIntegerAllZeros.test(rightSide) == true) {//user tried to divide by 0
                    total = "lmao";
                } else {
                    total = leftSide / rightSide;
                }
            }
        } else {
            total = leftSide; //for case when operator is not initialized
        }

        userInputArray[0] = total;
        userInputArray[2] = 0;

        if (total.toString().length > 10) {
            if (total % 1 != 0) {
                total = total.toFixed(2);
            } else {
                alert(total);
                resetCalculator();
            }
        }
        calculatorDisplay.textContent = total;
        //console.log(userInputArray);
    }
}

function updateCalculatorDisplay(str) {
    if (calculatorDisplay.textContent == "lmao") {
        initialInput = true;
        operatorClickCount = 0;
        userInputArray[0] = userInputArray[2];
        userInputArray[2] = 0;
    }

    if (initialInput) {
        calculatorDisplay.textContent = str
    } else if (calculatorDisplay.textContent.length < 10) {
        calculatorDisplay.textContent += str;
    } else if (calculatorDisplay.textContent.length == 10) {
        alert("Number of digits exceeded for calculator screen size!");
    }

    if (operatorClickCount == 0) {
        userInputArray[0] = (calculatorDisplay.textContent);
    } else if (operatorClickCount >= 1) {
        userInputArray[2] = (calculatorDisplay.textContent);
    }

    //don't increase number of digits on the screen if the user keeps pressing 0
    if (!(calculatorDisplay.textContent.length == 1 && calculatorDisplay.textContent == 0)) {
        initialInput = false;
    }
    //A window into the inner magic of the calculator
    console.log("Initial Input: " + initialInput);
    console.log("Click count :" + operatorClickCount);
    console.log("First Index " + userInputArray[0]);
    console.log("Second Index " + userInputArray[1]);
    console.log("Third Index " + userInputArray[2]);
    console.log(userInputArray)
}

function resetCalculator() {
    if (!equalsBtnClicked) {//reset everything
        calculatorDisplay.textContent = 0;
        userInputArray = [0, 0, 0];
    }
    initialInput = true;
    operatorClickCount = 0;
    decimalCount = 0;
    equalsBtnClicked = false;
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

fiveBtn.addEventListener("click", () => {
    updateCalculatorDisplay(fiveBtn.textContent);
})

sixBtn.addEventListener("click", () => {
    updateCalculatorDisplay(sixBtn.textContent);
})

sevenBtn.addEventListener("click", () => {
    updateCalculatorDisplay(sevenBtn.textContent);
})

eightBtn.addEventListener("click", () => {
    updateCalculatorDisplay(eightBtn.textContent);
})

nineBtn.addEventListener("click", () => {
    updateCalculatorDisplay(nineBtn.textContent);
})

addBtn.addEventListener("click", () => {
    operate(userInputArray[0], userInputArray[2])
    userInputArray[1] = "+"
})

subtractBtn.addEventListener("click", () => {
    operate(userInputArray[0], userInputArray[2])
    userInputArray[1] = "-"
})

multiplyBtn.addEventListener("click", () => {
    operate(userInputArray[0], userInputArray[2])
    userInputArray[1] = "*"
})

divideBtn.addEventListener("click", () => {
    operate(userInputArray[0], userInputArray[2])
    userInputArray[1] = "/"
})

equalsBtn.addEventListener(("click"), () => {
    equalsBtnClicked = true;
    operate(userInputArray[0], userInputArray[2]);
    resetCalculator();
})

clearBtn.addEventListener("click", () => {
    resetCalculator();
})

changeSignBtn.addEventListener("click", () => {
    initialInput = true;//overwrite the previous element in userInputArray
    updateCalculatorDisplay(-calculatorDisplay.textContent);
})

delBtn.addEventListener("click", () => {
    if (calculatorDisplay.textContent.length != 1) {
        calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, calculatorDisplay.textContent.length - 1)
        if (!calculatorDisplay.textContent.includes(".")) {//check whether the decimal was deleted
            decimalCount = 0;
        }
    } else {
        calculatorDisplay.textContent = 0;
    }
    initialInput = true;
    updateCalculatorDisplay(calculatorDisplay.textContent);
})

decimal.addEventListener("click", () => {
    decimalCount++;

    if (decimalCount == 1) {
        initialInput = true;

        if (calculatorDisplay.textContent != "lmao") {
            if (operatorClickCount == 0) {
                if (userInputArray[0] == 0) {
                    userInputArray[0] = "0.";
                } else {
                    userInputArray[0] += "."
                }
                calculatorDisplay.textContent = userInputArray[0];
            } else if (operatorClickCount >= 1) {
                userInputArray[2] += ".";
                calculatorDisplay.textContent = userInputArray[2];
            } else {
                calculatorDisplay.textContent = calculatorDisplay.textContent + ".";
            }
        }
        updateCalculatorDisplay(calculatorDisplay.textContent);
    }
})

