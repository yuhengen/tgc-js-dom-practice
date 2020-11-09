// PLACE YOUR CODE HERE
<<<<<<< HEAD
let hello = document.querySelector("h1");
hello.innerText = "Hello world!"

let important = document.querySelector("span#important");
important.style.backgroundColor = "red";

let todo = document.querySelector("li.todo");
todo.style.fontFamily = "Verdana";
todo.style.fontSize = "16px";
=======
document.querySelector('h1').innerText = "Hello world!";

document.querySelector('span#important').style.backgroundColor = 'red';

let todo = document.querySelector('li.todo');
// => let todo = <HTMLLIElement>
todo.style.fontFamily = 'Verdana';
// => <HTMLLIElement>.style.fontFamily = "Verdana";
todo.style.fontSize = '16px';
>>>>>>> upstream/main

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}