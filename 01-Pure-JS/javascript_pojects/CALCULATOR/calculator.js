//* نمسك ال key اللي مسئول اصلا عن كل زرار 

const keys = document.getElementById('keys');
const display = document.getElementById("display");


   //* الاله مستنيه التلاته دول 

    let firstNumber = null;
    let operator = null;
    let waitingForSecond  = false;


keys.addEventListener('click', function (e) {

 const btn = e.target.closest("button");
  if (!btn) return;


  //* اشكال الداتا الاساسيه 
    const num = btn.dataset.num;
    const op = btn.dataset.op;
    const action = btn.dataset.action;


//* الرقم الاول اللي هندخله 
 
if (num !== undefined) {

    if (waitingForSecond) {
        display.value += " " + num;
        waitingForSecond = false;
    } else {
        if (display.value === "0") {
            display.value = num;
        } else {
            display.value += num;
        }
    }

    return;
}
  if (op) {
    firstNumber = Number(display.value);
    operator = op;
    display.value = firstNumber + " " + operator;

    waitingForSecond = true;
    return;
}

if (action === "equal") {

    if (operator === null || firstNumber === null) return;

const parts = display.value.trim().split(" ");
const secondNumber = Number(parts[2]);  // بنمسك الجزء التاني بس 

let result;

    if (operator === "+") result = firstNumber + secondNumber;
    if (operator === "-") result = firstNumber - secondNumber;
    if (operator === "*") result = firstNumber * secondNumber;
    if (operator === "/") result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;

    display.value = String(result);

    firstNumber = null;
    operator = null;
    waitingForSecond = true;
    return;
}

   
if (action === "clear") {
    display.value = "0";
    firstNumber = null;
    operator = null;
    waitingForSecond = false;
    return;
}

});