// PLACE YOUR CODE HERE

let header1 = document.querySelector("h1");
header1.style.color = "green";

let updateText = document.querySelector("li.finished");
updateText.innerText = "Repay credit card debt";

let urgent = document.querySelector("li#urgent");
urgent.style.border = "2px solid black";

let emphasis = document.querySelector(".emphasis");
emphasis.style.textDecoration = "underline";

let pemphasis = document.querySelector("p.emphasis");
pemphasis.style.backgroundColor = "orange";
pemphasis.style.fontSize = "32px";
pemphasis.style.lineHeight = "24px";

let todo = document.querySelector("li#urgent span.todo");
todo.style.backgroundColor = "yellow";

let header2 = document.querySelector("h2");
header2.innerHTML = "<span class='greetings'>About Us</span>"
