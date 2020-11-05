// PLACE YOUR CODE HERE

if (parseInt(document.querySelector("#box").innerHTML) % 2 == 0) {
  document.querySelector("#box").style.backgroundColor = "green";
} else {
  document.querySelector("#box").style.backgroundColor = "red";
}

document.querySelector("#increment").addEventListener("click", function() {
  let num = parseInt(document.querySelector("#box").innerHTML);
  if (num < 10) {
    document.querySelector("#box").innerHTML = num + 1;
  }

  if ( (num + 1) % 2 == 0) {
    document.querySelector("#box").style.backgroundColor = "green";
  } else {
    document.querySelector("#box").style.backgroundColor = "red";
  }
});

document.querySelector("#decrement").addEventListener("click", function() {
  let num = parseInt(document.querySelector("#box").innerHTML);
  if (num > 0) {
    document.querySelector("#box").innerHTML = num - 1;
  }

  if ((num - 1) % 2 == 0) {
    document.querySelector("#box").style.backgroundColor = "green";
  } else {
    document.querySelector("#box").style.backgroundColor = "red";
  }
});

document.querySelector("#reset").addEventListener("click", function() {
  document.querySelector("#box").innerHTML = 0;
  document.querySelector("#box").style.backgroundColor = "green";
});
