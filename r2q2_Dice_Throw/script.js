// PLACE YOUR CODE HERE
function dice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    // console.log(dice1)
    return dice1
}

document.querySelector("button").addEventListener("click", function() {
    let box = document.querySelectorAll(".box")
    let total = 0
    for (let b of box) {
        b.textContent = dice();
        total = total + parseInt(b.textContent);
    }
    

    let span1 = document.querySelector("span");
    span1.textContent = total

})