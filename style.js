const result = document.getElementById("results");

function appendToDisplay(input){
    if (result.textContent === "0") {
        result.textContent = input;
    } else {
        result.textContent += input;
    }
}

function clearDisplay(){
    result.textContent = "0";
}

function calculate(){
    try {
        result.textContent = eval(result.textContent);
    } catch {
        result.textContent = "Syntax Error";
    }
}
