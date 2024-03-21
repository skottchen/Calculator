const numbers = document.getElementsByClassName("#");
const addBtn = document.getElementById("add");
const calcDisplay = document.querySelector(".user-input");
let operator;
let leftSide;
let rightSide;
let leftSideDigitCount;
let rightSideDigitCount;
let gettingRightSide;
let gettingLeftSide;
let operandClickCount = 0;
let total = 0;
function getLeftSide() {
    leftSideDigitCount = 0;
    gettingRightSide = false;
    gettingLeftSide = true;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            if (!gettingRightSide) {
                if (leftSideDigitCount == 0) {
                    calcDisplay.textContent = numbers[i].textContent;
                } else {
                    calcDisplay.textContent += numbers[i].textContent;
                }
                leftSide = parseInt(calcDisplay.textContent);
                leftSideDigitCount++;
            }
        })
    }

    //console.log("Left: " + calcDisplay.textContent)
}

function getRightSide() {
    rightSideDigitCount = 0;
    gettingRightSide = true;
    gettingLeftSide = false;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            if (!gettingLeftSide) {
                if (rightSideDigitCount == 0) {
                    calcDisplay.textContent = numbers[i].textContent;
                } else {
                    calcDisplay.textContent += numbers[i].textContent;
                }
                rightSide = parseInt(calcDisplay.textContent);
                rightSideDigitCount++;
            }
        })
    }

    //console.log("Right: "+ calcDisplay.textContent)
}

// function operate(leftSide, rightSide, operator) {//directions say not to use eval()
//     total = leftSide + rightSide;
//     if (operator == "+") {
//         calcDisplay.textContent = total;
//     }
//     leftSide = total;
//     rightSide = 0;
//     operandClickCount = 0;
//     rightSideDigitCount = 0;
//     leftSideDigitCount = 0;
//     console.log(leftSide);
//     console.log(rightSide);
// }

// getLeftSide();//first time
// addBtn.addEventListener("click", () => {
//     operator = document.getElementById("add").textContent;
//     if (operandClickCount < 1) {
//         getRightSide();
//         operandClickCount++;
//         console.log(operandClickCount);
//     } else {
//         operate(leftSide, rightSide, operator);
//     }
// })
