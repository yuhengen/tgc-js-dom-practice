// write your answer here
for (let e of document.querySelectorAll('.emphasis')) {
    e.style.fontFamily = 'Verdana';
}

for (let e of document.querySelectorAll('li.finished')) {
    e.style.textDecoration = 'line-through';
}

for (let e of document.querySelectorAll('ul#low-priority li.todo')) {
    e.style.backgroundColor = 'blue';
}

for (let e of document.querySelectorAll('.alert')) {
    e.style.backgroundColor = 'red';
}

