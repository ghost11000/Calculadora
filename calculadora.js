function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearToDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    document.getElementById('display').value = result;
}