// calculator Program
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    // SR('a');
}

function clearDisplay(){
    display.value = ""
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error"
    }
}

function back() {
    exp = display.value;
    exp = exp.substring(0, exp.length - 1);
    display.value = exp;
}

function SR(s){
    display.value = input*input;
}
