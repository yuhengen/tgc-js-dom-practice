let increment = document.querySelector("#increment");
let boxNumber = document.querySelector("#box");
let i = parseInt(0);
boxNumber.style.backgroundColor = "green";

increment.addEventListener("click", function () {
    if (i < 10) {
        i++;
        colorChange(i, boxNumber);
        boxNumber.innerHTML = parseInt(i);
    }
})

let decrement = document.createElement("button");
decrement.setAttribute("id", "decrement");
decrement.innerHTML = "-";
document.body.appendChild(decrement);

decrement.addEventListener("click", function () {
    if (i > 0) {
        i--;
        colorChange(i, boxNumber);
        boxNumber.innerHTML = parseInt(i);
    }
})

let linebreak = document.createElement("br");
document.body.appendChild(linebreak);
let reset = document.createElement("button");
reset.setAttribute("id", "reset");
reset.innerHTML = "Reset";
document.body.appendChild(reset);

reset.addEventListener("click", function () {
    i = 0;
    boxNumber.innerHTML = parseInt(i);
    boxNumber.style.backgroundColor = "green";
})

function colorChange(i, boxNumber) {
    if (i % 2 === 0) {
        boxNumber.style.backgroundColor = "green";
    } else {
        boxNumber.style.backgroundColor = "red";
    }
}