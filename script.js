
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.button');
let clear = document.querySelector('.clear');
let equals = document.querySelector('.equals');
let operation = document.querySelectorAll('.opBtn');

function pressedKey() {
    var num = this.innerHTML;
    if (num != '=') {
        screen.value = screen.value + num;
    }

}

buttons.forEach(function (button) {
    button.addEventListener("click", pressedKey);

});

function clearScreen() {
    screen.value = "";
}

clear.addEventListener("click", clearScreen);

function calculate() {

    try {
        screen.value = eval(screen.value);
    }
    catch (error) {
        console.log(screen.value);
    }
}

equals.addEventListener("click", calculate);

