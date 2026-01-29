const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => handleInput(button.innerText));
});

function handleInput(value) {
    if (value === "C") {
        clearDisplay();
    } else if (value === "⌫") {
        deleteLast();
    } else if (value === "=") {
        calculate();
    } else {
        appendValue(value);
    }
}

function appendValue(value) {
    // Reset if Error is shown
    if (display.innerText === "Error") {
        display.innerText = "0";
    }

    value = value
        .replace("÷", "/")
        .replace("×", "*")
        .replace("−", "-");

    const operators = ["+", "-", "*", "/"];
    const current = display.innerText;
    const lastChar = current.slice(-1);

    // Prevent operator at start (except minus)
    if (current === "0") {
        if (operators.includes(value)) {
            if (value === "-") {
                display.innerText = "-";
            }
            return;
        }
        display.innerText = value;
        return;
    }

    // Prevent multiple operators in a row
    if (operators.includes(lastChar) && operators.includes(value)) {
        // Allow minus after operator (e.g. 5 * -3)
        if (value === "-" && lastChar !== "-") {
            display.innerText += value;
        }
        return;
    }

    display.innerText += value;
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText === "Error") {
        clearDisplay(); // behave like C when Error is shown
        return;
    }

    display.innerText = display.innerText.slice(0, -1) || "0";
}


function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown", (e) => {
    if ("0123456789+-*/.".includes(e.key)) {
        appendValue(e.key);
    }
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
    if (e.key === "Escape") clearDisplay();
});
