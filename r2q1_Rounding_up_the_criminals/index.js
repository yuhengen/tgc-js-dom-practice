let arrested = document.querySelectorAll(".a")

for (let a of arrested) {
    a.style.backgroundColor = "red";
    let jailed = document.createTextNode("(jailed)");
    a.appendChild(jailed);
}

let undercover = document.querySelectorAll(".a.undercover")
for (let b of undercover) {
    b.style.backgroundColor = "yellow";
}