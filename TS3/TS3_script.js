var displayInput = document.getElementById('displayInput');

function appendValue(value) {
    displayInput.value += value;
}

function clearInput() {
    displayInput.value = '';
}

function deleteLastChar() {
    displayInput.value = displayInput.value.slice(0, -1);
}

function evaluateExpression() {
    displayInput.value = eval(displayInput.value) || '';
}
