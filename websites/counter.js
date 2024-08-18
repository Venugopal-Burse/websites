let countValue = document.getElementById("counterValue");

function onDecrement() {
    let previousValue = countValue.textContent;
    let updateValue = parseInt(previousValue) - 1;
    if (updateValue > 0) {
        countValue.style.color = "green";
    } else if (updateValue < 0) {
        countValue.style.color = "red";
    } else {
        countValue.style.color = "black";
    }
    countValue.textContent = updateValue
}

function onIncrement() {
    let previousValue = countValue.textContent;
    let updateValue = parseInt(previousValue) + 1;
    if (updateValue > 0) {
        countValue.style.color = "green";
    } else if (updateValue < 0) {
        countValue.style.color = "red";
    } else {
        countValue.style.color = "black";
    }
    countValue.textContent = updateValue
}

function onReset() {
    let updateValue = 0;
    countValue.textContent = updateValue;
    countValue.style.color = "black";

}