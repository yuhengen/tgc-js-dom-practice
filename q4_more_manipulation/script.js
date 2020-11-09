<<<<<<< HEAD
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
=======
document.querySelector('h1').style.color = 'green';

document.querySelector('li.finished').innerText = "Repay credit card debt";

let urgentItem = document.querySelector('li#urgent');
urgentItem.style.borderWidth = '2px';
urgentItem.style.borderColor = 'black';

document.querySelector('.emphasis').style.textDecoration = 'underline';

let emphasis = document.querySelector("p.emphasis");
emphasis.style.backgroundColor = "orange";
emphasis.style.fontSize = "32px";
emphasis.style.lineHeight = "24px";


document.querySelector('li#urgent span.todo').style.backgroundColor = 'yellow';

document.querySelector('h2').innerHTML = "<span class='greetings'>About Us</span>";
>>>>>>> upstream/main
