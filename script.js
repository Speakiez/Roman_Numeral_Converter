// Variable Declaration //

const inputBox = document.getElementById("input");
const outputBox = document.getElementById("output");
const convertBtn = document.getElementsByClassName("convert-btn")[0];

const lookupRomans = {
    M: 1000,    CM: 900,
    D: 500,     CD: 400,
    C: 100,     XC: 90,
    L: 50,      XL: 40,
    X: 10,      IX: 9,
    V: 5,       IV: 4,
    I: 1
};

// Functions //

const checkUserInput = () => {
    const userInput = parseInt(inputBox.value);    
    
    if (isNaN(userInput)) {
        displayResult("Invalid");
        return;
    }

    if (userInput <= 0) {
        displayResult("Negative");
        return;
    }

    if (userInput >= 4000) {
        displayResult("Overflow");
        return;
    }
    
    displayResult(convertToRoman(userInput));
};

const convertToRoman = (input, output = "") => {
    if (input === 0) {
        return output;
    } else {
        for (const [key, value] of Object.entries(lookupRomans)) {
            if (input >= value) return convertToRoman(input - value, output += key);
        }
    }
};

const displayResult = (input) => {
    switch (input) {
        case "Invalid":
            outputBox.innerText = "Please enter a valid number.";
            break;
        case "Negative":
            outputBox.innerText = "Please enter a number greater than or equal to 1.";
            break;
        case "Overflow":
            outputBox.innerText = "Please enter a number less than or equal to 3999.";
            break;
        default:    
            outputBox.innerText = "Output: " + input;
            break;
    }

    outputBox.classList.remove("hidden");
    inputBox.value = "";
};

// Event Detection //

convertBtn.addEventListener("click", checkUserInput);

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});