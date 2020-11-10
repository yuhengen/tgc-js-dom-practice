// PLACE YOUR CODE HERE

let emphasis = document.querySelectorAll(".emphasis");
for (let changeFont of emphasis) {
    changeFont.style.fontFamily = "Verdana";
}

let finished = document.querySelectorAll("li.finished");
for (let strike of finished) {
    strike.style.textDecoration = "line-through";
}

let todo = document.querySelectorAll("ul#low-priority li.todo");
for (let todolist of todo) {
    todolist.style.backgroundColor = "blue";
}

let alert1 = document.querySelectorAll(".alert");
for (let changeColor of alert1) {
    changeColor.style.color = "red";
}